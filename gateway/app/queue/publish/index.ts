import amqp from 'amqplib';

import stablishChannel from '../channel';

import {
	queue,
	config
} from './config';

let channel: boolean | amqp.Channel = false;

(async () => {
	channel = await stablishChannel();
})();

export default async (message: any = { error: true }) => {
	if ((typeof channel != 'boolean') && (!message?.error)) {
		await channel?.assertQueue(queue, config);
		await channel?.sendToQueue(queue, Buffer.from(JSON.stringify(message)), { persistent: true });
	}
};
