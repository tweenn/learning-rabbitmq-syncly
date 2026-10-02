const config = require('config');

const PORT = config.get('http.port');
const HOST = config.get('http.host');

const listen = {
	port: PORT,
	host: HOST
};

const server = {
	logger: config.get('fastify.logger')?.toLowerCase() === 'true',
	bodyLimit: 2 * 1024 * 1024
};

export default {
	listen,
	server
};

export {
	listen,
	server
};
