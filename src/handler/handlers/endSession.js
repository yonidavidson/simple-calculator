const handler = (line, { sessionCleaner }) => () => {
	const str = line();
	if (str.length == 0) {
		sessionCleaner();
	}
};

export default handler;
