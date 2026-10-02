import connect from './connect';

const stablishConnection: Function = async () => {
	const connection = await connect();

	if (!connection) {
		return stablishConnection();
	}
	return connection;
};

export default () => {
	return stablishConnection();
};
