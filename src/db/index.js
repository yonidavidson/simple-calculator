const setKey = (key, val, db) => (db[key] = val);
const getKey = (key, db) => (db[key] === undefined ? 0 : db[key]);

export { setKey, getKey };
