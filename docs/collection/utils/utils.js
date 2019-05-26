import _ from 'lodash';
export function generateField(x, y) {
    let _x = x;
    let _y = y;
    if (_x < 4)
        _x = 4;
    if (_y < 4)
        _y = 4;
    const xArray = new Array(x).fill(0);
    const yArray = new Array(y).fill(0);
    const field = yArray.map(() => _.clone(xArray));
    field[x / 2][y / 2] = 1;
    field[x / 2 - 1][y / 2 - 1] = 1;
    field[x / 2 - 1][y / 2] = 2;
    field[x / 2][y / 2 - 1] = 2;
    return field;
}
export function calcReverseField(x_position, y_position, field, maxVal = 1000) {
    const pointVal = field[y_position][x_position];
    const newField = _.cloneDeep(field);
    const upArr = _getArr(x_position, y_position, newField, 0);
    const dArr = _getArr(x_position, y_position, newField, 4);
    const rArr = _getArr(x_position, y_position, newField, 2);
    const lArr = _getArr(x_position, y_position, newField, 6);
    const urArr = _getArr(x_position, y_position, newField, 1);
    const drArr = _getArr(x_position, y_position, newField, 3);
    const dlArr = _getArr(x_position, y_position, newField, 5);
    const ulArr = _getArr(x_position, y_position, newField, 7);
    console.log(dlArr);
    const nupArr = calcReverse(pointVal, upArr, maxVal);
    const ndArr = calcReverse(pointVal, dArr, maxVal);
    const nrArr = calcReverse(pointVal, rArr, maxVal);
    const nlArr = calcReverse(pointVal, lArr, maxVal);
    const nurArr = calcReverse(pointVal, urArr, maxVal);
    const ndrArr = calcReverse(pointVal, drArr, maxVal);
    const ndlArr = calcReverse(pointVal, dlArr, maxVal);
    const nulArr = calcReverse(pointVal, ulArr, maxVal);
    nupArr.concat(ndArr).concat(nrArr).concat(nlArr)
        .concat(nurArr).concat(ndrArr).concat(ndlArr).concat(nulArr).forEach(point => newField[point.y][point.x] = point.pointVal);
    return newField;
}
export function _getArr(x, y, field, dir) {
    let arr = [];
    let _x = x;
    let _y = y;
    while (_moveAndGetPoint(_x, _y, field, dir).isMove) {
        const p = _moveAndGetPoint(_x, _y, field, dir);
        arr.push(p);
        _x = p.x;
        _y = p.y;
    }
    return arr;
}
export function _moveAndGetPoint(x, y, field, dir) {
    try {
        let p = 0;
        let nx = 0;
        let ny = 0;
        switch (dir) {
            case 0:
                if (y < 1)
                    throw new Error();
                p = field[y - 1][x];
                nx = x;
                ny = y - 1;
                break;
            case 1:
                if (y < 1 || field[0].length - 1 <= x)
                    throw new Error();
                p = field[y - 1][x + 1];
                nx = x + 1;
                ny = y - 1;
                break;
            case 2:
                if (field[0].length - 1 <= x)
                    throw new Error();
                p = field[y][x + 1];
                nx = x + 1;
                ny = y;
                break;
            case 3:
                if (field.length - 1 <= y || field[0].length - 1 <= x)
                    throw new Error();
                p = field[y + 1][x + 1];
                nx = x + 1;
                ny = y + 1;
                break;
            case 4:
                if (field.length - 1 <= y)
                    throw new Error();
                p = field[y + 1][x];
                nx = x;
                ny = y + 1;
                break;
            case 5:
                if (field.length - 1 <= y || x < 1)
                    throw new Error();
                p = field[y + 1][x - 1];
                nx = x - 1;
                ny = y + 1;
                break;
            case 6:
                if (x < 1)
                    throw new Error();
                p = field[y][x - 1];
                nx = x - 1;
                ny = y;
                break;
            case 7:
                if (y < 1 || x < 1)
                    throw new Error();
                p = field[y - 1][x - 1];
                nx = x - 1;
                ny = y - 1;
                break;
        }
        return {
            x: nx,
            y: ny,
            pointVal: p,
            isMove: true
        };
    }
    catch (e) {
        return {
            x,
            y,
            pointVal: field[y][x],
            isMove: false
        };
    }
}
/**
 * 与えられた配列を先頭から評価し、
 * オセロのルールに従って反転させるコマの値を増やす
 *
 * @param pointVal クリックした場所の値
 * @param arr
 */
export function calcReverse(pointVal, arr, maxVal = 1000) {
    const newArr = _.cloneDeep(arr);
    for (let i = 0; i < newArr.length; i++) {
        // 途中で空白の駒があった場合はもとの配列を返す
        if (newArr[i].pointVal === 0) {
            return arr;
        }
        // であった駒が上限値に達していた場合はひっくり返せないようにする
        if (newArr[i].pointVal >= maxVal) {
            return arr;
        }
        // 自分の駒が見つかった場合は処理を中断して新しい配列を返す
        if ((newArr[i].pointVal + pointVal) % 2 === 0) {
            break;
        }
        //最後まで自分の駒が見つからない場合はもとの配列を返す
        if (newArr.length - 1 === i) {
            return arr;
        }
        newArr[i].pointVal += 1;
    }
    return newArr;
}
