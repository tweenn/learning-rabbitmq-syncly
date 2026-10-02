export default (Server: any) => {
	Server.get('/health-check', (_request: any, reply: any) => {
		return reply
			.code(200)
			.header('Content-Type', 'application/json; charset=utf-8')
			.send({
				error: false,
				data: 'alive',
			});
	});
};
