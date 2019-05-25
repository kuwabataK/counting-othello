import _ from 'lodash'

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
  return yArray.map(() => _.clone(xArray))
}

export function calcReverseField(x_position: number, y_position: number, field: number[][]) {

  const pointVal = field[y_position][x_position]

  const newField = _.cloneDeep(field)
  const upArray = [...Array(y_position).keys()].map(i => newField[i][x_position]).reverse()
  const downArray = [...Array(newField.length - y_position - 1).keys()]
    .map(i => newField[y_position + 1 + i][x_position])
  const rightArray = [...Array(newField[0].length - x_position - 1).keys()]
    .map(i => newField[y_position][x_position + 1 + i])
  const leftArray = [...Array(x_position).keys()].map(i => newField[y_position][i]).reverse()

  console.log(upArray)
  console.log(downArray)
  console.log(rightArray)
  console.log(leftArray)


  const newUpArr = calcReverse(pointVal, upArray)
  const newDownArr = calcReverse(pointVal, downArray)
  const newRightArr = calcReverse(pointVal, rightArray)
  const newLeftArr = calcReverse(pointVal, leftArray)

  console.log(newUpArr)
  console.log(newDownArr)
  console.log(newRightArr)
  console.log(newLeftArr)

  const newXLine = [...newLeftArr.reverse(), pointVal, ...newRightArr]
  const newYLine = [...newUpArr.reverse(), pointVal, ...newDownArr]

  newField[y_position] = newXLine
  newField.forEach((xArr, i) => xArr[x_position] = newYLine[i])
  return newField
}


export function calcReverse(pointVal: number, arr: number[]) {
  const newArr = _.cloneDeep(arr)
  let cnt = 0
  for (let i of newArr) {
    cnt++
    if ( i === 0 || newArr.length - 1 < cnt) {
      return arr
    }
    if ((i + pointVal) % 2 === 0) {
      break;
    }
    newArr[cnt - 1] += 1
  }
  return newArr
}