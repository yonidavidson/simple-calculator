const handler = (line,{sessionCloser}) => () => {
	console.log('hello ' + line());
	sessionCloser();
};

export default handler;
