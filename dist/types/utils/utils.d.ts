export declare function format(first: string, middle: string, last: string): string;
export declare function generateField(x: number, y: number): number[][];
export declare function calcReverseField(x_position: number, y_position: number, field: number[][]): number[][];
export declare function _getArr(x: number, y: number, field: number[][], dir: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7): PointObj[];
export declare function _moveAndGetPoint(x: number, y: number, field: number[][], dir: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7): PointObj;
/**
 * 与えられた配列を先頭から評価し、
 * オセロのルールに従って反転させるコマの値を増やす
 *
 * @param pointVal クリックした場所の値
 * @param arr
 */
export declare function calcReverse(pointVal: number, arr: PointObj[]): PointObj[];
interface PointObj {
    x: number;
    y: number;
    pointVal: number;
    isMove: boolean;
}
export {};
