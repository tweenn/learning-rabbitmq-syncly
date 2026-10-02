import crypto from 'node:crypto';

export default ({
	hash = '',
	type = 'sha256'
}) => {
	const shasum = crypto.createHash(type);
	shasum.update(hash);
	return shasum.digest('hex');
};
