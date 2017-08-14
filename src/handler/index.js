import pre from './pre';
import memory from './memory';
import i2p from 'infix-to-postfix';
import rpn from 'reverse-polish-notation';

const handler = (input, db) => {
	const preInput = pre(input);
	const varName = preInput.split('=')[0].trim();
	const body = preInput.split('=')[1].trim();
	const { text, mem } = memory(body, Object.assign({}, db));	
	const update = {};
	console.log(i2p(text))
	update[varName] = Number(rpn(i2p(text)));
	return Object.assign({}, mem, update);
};

export default handler;
