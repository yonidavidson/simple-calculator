import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const connect = handle =>
	rl.on('line', line => {
		handle(() => line.trim(), {
			sessionCloser: () => rl.close(),
		});
	});

export default connect;
