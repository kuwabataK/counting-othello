
export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}


export function generateField(x: number, y: number): number[][] {
  const xArray = new Array(x).fill(0)
  const yArray = new Array(y).fill(0)
  return yArray.map(() => xArray)
}