import pre from './pre';
import memory from './memory';
import sy from 'shunting-yard';

const handler = (input, db) => {
	const preInput = pre(input);
	const varName = preInput.split('=')[0].trim();
	const body = preInput.split('=')[1].trim();
	const { text, mem } = memory(body, Object.assign({}, db));
	const update = {};
	update[varName] = Number(sy.compute(text));
	return Object.assign({}, mem, update);
};

export default handler;
