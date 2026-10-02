interface Request {
	requester: string,
	id: string,
	callback: Function
};

const requests: any = {};

const addRequest = (request: Request) => {
	const index = request?.id || 'error';

	requests[index] = request;
};

const deleteRequest = (index: string) => {
	delete (requests[index]);
}

export default {
	requests,
	addRequest,
	deleteRequest
};

export {
	requests,
	addRequest,
	deleteRequest
};
