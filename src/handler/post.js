const post = (input, db) => {
    const tokens = input.split("=");
    const key = tokens[0].trim();
    const val = parseInt(tokens[1].trim());
    db[key] = val;
};

export default post;