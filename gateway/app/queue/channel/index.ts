import connect from '../connect';

const stablishChannel: Function = async () => {
	const connection = await connect();
	let channel = await connection.createChannel();

	if (!channel) {
		return stablishChannel();
	}
	return channel;
};

export default () => {
	return stablishChannel();
};
