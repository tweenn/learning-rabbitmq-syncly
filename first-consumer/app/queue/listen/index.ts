import amqp from 'amqplib';

import stablishChannel from '../channel';

import {
	queue,
	config
} from './config';

import dataProcess from '../../data-process';

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
				if ((message) && typeof channel != 'boolean') {
					const answer = await dataProcess(message);

					if (answer) {
						channel.ack(message);
					} else {
						channel.reject(message);
					}
				}
			},
			{ noAck: false }
		);
	}
};
