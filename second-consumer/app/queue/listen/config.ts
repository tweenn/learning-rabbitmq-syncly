const config = require('config');

const queueName = config.get('queue.channels.request');

const queueConfig = {
	durable: true,
	messageTtl: 5 * 60 * 1000 // 5 Min
}

export default {
	queue: queueName,
	config: queueConfig
};

export {
	queueName as queue,
	queueConfig as config
};
