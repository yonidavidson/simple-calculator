import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const connect = handle =>
	rl.on('line', line => {
		handle(() => line.replace(/\s/g, '') , {
			sessionCloser: () => rl.close(),
			sessionCleaner: () => console.log('end of session'),
		});
	});

export default connect;
