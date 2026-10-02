import { unauthorized } from '../../helpers/reply';

export default (Server: any) => {
	Server.all('*', (_request: any, reply: any) => {
		return unauthorized(reply);
	});
};
