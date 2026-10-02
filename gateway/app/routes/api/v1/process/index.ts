import { publish } from '../../../../queue'

import processRequest from './process-request';
import {
	addRequest
} from '../../../../queue/request-queue';

export default (Server: any) => {
	Server.post('/api/v1/process', async (request: any, reply: any) => {
		let requestResolver: Function;
		const awaitResponse = new Promise((resolve) => {
			requestResolver = resolve;
		});

		const processedResquest = processRequest(request.body);

		addRequest({
			requester: processedResquest.requester,
			id: processedResquest.id,
			callback: (message: any) => { console.log('callback called'); requestResolver(message); }
		});

		publish(processedResquest);

		const response = await awaitResponse;

		return reply
			.code(200)
			.header('Content-Type', 'application/json; charset=utf-8')
			.send({
				error: false,
				data: response,
			});
	});
};
