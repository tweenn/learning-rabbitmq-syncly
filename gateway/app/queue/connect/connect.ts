import amqp from 'amqplib';
const config = require('config');

const queueEndpoint = config.get('queue.endpoint');

export default async () => {
	let connection: boolean | amqp.Connection = false;
	try {
		connection = await amqp.connect(queueEndpoint);
	} catch (err) {
		console.warn(err);
	};

	return connection;
}
