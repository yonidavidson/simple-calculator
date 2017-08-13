const pre = (input) => {
    let response = input.replace(/\+\=/g, ' #1 ');
    response = response.replace(/\+{1}/g, ' + ');
    response = response.replace(/\={1}/g, ' = ');
    response = response.replace(/\s\s+/g, ' ');
    return response.trim()
};

export default pre;