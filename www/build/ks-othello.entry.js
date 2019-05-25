import { e as registerInstance, f as h } from './counting-othello-a8681c23.js';
import { a as generateField, b as calcReverseField } from './chunk-45e0a9ea.js';

class Othello {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * xLength of Field
         */
        this.x_length = 9;
        /**
         * yLength of Field
         */
        this.y_length = 9;
        this.field = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        this.player = 0;
    }
    /**
     * コンポーネントロード時発火する関数
     */
    componentWillLoad() {
        this.field = generateField(this.x_length, this.y_length);
    }
    xWatch() {
        this.field = generateField(this.x_length, this.y_length);
    }
    yWatch() {
        this.field = generateField(this.x_length, this.y_length);
    }
    clickSlot(e, x, y) {
        e.stopPropagation();
        if (this.field[y][x] !== 0) {
            return;
        }
        this.field[y][x] = this.field[y][x] + this.player + 1;
        this.player = this.player === 1 ? 0 : 1;
        this.field = calcReverseField(x, y, this.field);
    }
    render() {
        return h("table", null, this.field.map((xArr, yIndex) => h("tr", null, xArr.map((num, xIndex) => h("th", { onClick: (e) => this.clickSlot(e, xIndex, yIndex) }, num)))));
    }
    static get watchers() { return {
        "x": ["xWatch"],
        "y": ["yWatch"]
    }; }
    static get style() { return ""; }
}

export { Othello as ks_othello };
