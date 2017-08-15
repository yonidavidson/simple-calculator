import pre from './pre';
import memory from './memory';
import sy from 'shunting-yard';

const handler = (input, db) => {
	if (input.isEmpty()) {
		console.log('********');
		console.log(JSON.stringify(db));
		console.log('********');

		for (const prop of Object.keys(db)) {
			delete db[prop];
		}
		return;
	}
	const preInput = pre(input);
	const varName = preInput.split('=')[0].trim();
	const body = preInput.split('=')[1].trim();
	const { text, mem } = memory(body, Object.assign({}, db));
	const update = {};
	update[varName] = Number(sy.compute(text));
	return Object.assign({}, mem, update);
};

export default handler;

String.prototype.isEmpty = function() {
	return this.length === 0 || !this.trim();
};
