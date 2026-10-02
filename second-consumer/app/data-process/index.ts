import { publish } from '../queue';

export default async (message: any) => {
	const randomBoolean = Math.random() < 0.5;
	const awaitTime = Math.random() * 10000;
	const parsedMessage = JSON.parse(message.content.toString());

	await new Promise((resolve) => setTimeout(resolve, awaitTime));

	const answer = {
		requester: parsedMessage.requester,
		id: parsedMessage.id,
		message: {
			error: randomBoolean,
			message: `It ${randomBoolean ? 'worked': 'failed'} processing the request`
		}
	};

	publish(answer);

	return true;
};
