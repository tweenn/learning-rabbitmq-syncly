import amqp from 'amqplib';

import stablishChannel from '../channel';

import {
	queue,
	config
} from './config';

import {
	requests,
	deleteRequest
} from '../request-queue';

import uuid from '../../uuid';

let channel: boolean | amqp.Channel = false;

process.once('SIGINT', async () => {
	if (typeof channel != 'boolean') {
		await channel.close();
	}
});

export default async () => {
	channel = await stablishChannel();

	if (typeof channel != 'boolean') {
		await channel.assertQueue(queue, config);

		channel.consume(
			queue,
			async (message: any) => {
				if (message) {
					const parsedMessage = JSON.parse(message.content.toString());

					if (typeof channel != 'boolean') {
						const queuedRequest = requests?.[parsedMessage.id];

						if ((parsedMessage.requester === uuid) && queuedRequest) {
							queuedRequest.callback(parsedMessage);
							channel.ack(message);
							deleteRequest(queuedRequest.id);
						} else {
							channel.reject(message);
						}
					}
				}
			},
			{ noAck: false }
		);
	}
};
