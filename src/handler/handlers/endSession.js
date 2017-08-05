const handler = (line,{sessionCloser}) => () => {
	const str = line();
	if (str.length == 0){
		console.log(true);
	}
};

export default handler;
