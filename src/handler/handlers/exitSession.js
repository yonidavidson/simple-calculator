const handler = (line, { sessionCloser }) => () => {
	if (line() === 'exit') {
		console.log('exiting this calculator');
		sessionCloser();
	}
};

export default handler;
