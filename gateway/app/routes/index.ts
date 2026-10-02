import apiV1 from './api/v1';
import everythingElse from './everything-else';
import healthCheck from './health-check';

export default (Server: any) => {
	apiV1(Server);
	healthCheck(Server);
	everythingElse(Server);
};
