const handler = (closeSession, getLine) => () => {
	console.log('hello ' + getLine());
	closeSession();
};

export default handler;
