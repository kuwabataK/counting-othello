function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}
function generateField(x, y) {
    const xArray = new Array(x).fill(0);
    const yArray = new Array(y).fill(0);
    const res = yArray.map(() => xArray);
    console.log(res);
    return res;
}

export { generateField as a, format as b };
