const memory = (input, mem) => {
    let text = input;
    text = text.split(' ');
    text = text.map(x => {
    switch (typeof x) {
    case string:
        return "str";
    case number:
        return "num";
    default:
        return "other";
    }
    })
    text = text.trim();
    return {text, mem}
};

export default memory;