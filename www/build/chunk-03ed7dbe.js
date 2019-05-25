function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}
function generateField(x, y) {
    const xArray = new Array(x).fill(0);
    const yArray = new Array(y).fill(0);
    return yArray.map(() => xArray);
}

export { generateField as a, format as b };
