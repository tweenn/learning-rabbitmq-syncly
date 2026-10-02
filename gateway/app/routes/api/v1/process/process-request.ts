import {
	sha,
	random
} from '../../../../helpers/encryption';
import uuid from '../../../../uuid';

export default (body: any) => {
	const hash = JSON.stringify({
		body,
		date: new Date(),
		rand: random(0, 100),
		uuid
	});

	return {
		requester: uuid,
		id: sha({ hash }),
		date: new Date(),
		message: body
	};
};
