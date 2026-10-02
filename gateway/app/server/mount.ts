import Fastify from 'fastify';
import {
	server as serverConfig
} from './config';

import router from './router';

export default (options = serverConfig) => {
	let Server = Fastify(options);

	router(Server);

	return Server;
};
