import crypto from 'node:crypto';

export default () => {
	return crypto.randomUUID()
};
