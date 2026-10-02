export default (reply: any) => {
	return reply
		.code(403)
		.header('Content-Type', 'application/json; charset=utf-8')
		.send({
			error: true,
			data: 'unauthorized',
		});
}
