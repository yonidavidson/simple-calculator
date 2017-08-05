const handler = (line) => () => {
	const str = line();
	if (str.length == 0){
		console.log(true);
	}
};

export default handler;
