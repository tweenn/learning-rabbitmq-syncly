import {
	listen as serverConfig
} from './config';

import uuid from '../uuid';

export default (Server: any) => {
	Server.listen(serverConfig, (err: any) => {
		if (err) {
			console.error(err);
		}
	
		console.log('Server:');
		console.log(`💻  ${serverConfig.host}`);
		console.log(`🚪  ${serverConfig.port}`);
		console.log(`🆔  ${uuid}`);
	});
};
