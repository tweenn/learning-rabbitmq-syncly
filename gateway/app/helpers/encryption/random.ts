import crypto from 'node:crypto';

export default (min = 0, max = 10) => {
	min = Math.floor(min);
	max = Math.ceil(max);
	return crypto.randomInt(min, (max + 1));
};
