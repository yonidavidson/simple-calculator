const pre = (input) => {
    let response = input.replace(/\+\=/g, ' #1 ');
    response = response.replace(/([\d,a-z,A-Z])\+{1}/g, '$1 + ');
    response = response.replace(/\+{2}/g, ' #2');
    response = response.replace(/\={1}/g, ' = ');
    response = response.replace(/\s\s+/g, ' ');
    return response.trim()
};

export default pre;