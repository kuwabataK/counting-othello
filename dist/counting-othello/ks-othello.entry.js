import { e as registerInstance, f as h } from './counting-othello-a8681c23.js';
import { a as generateField } from './chunk-03ed7dbe.js';

class Othello {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The first name
         */
        this.x = 9;
        /**
         * The middle name
         */
        this.y = 9;
        this.field = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    }
    /**
     * コンポーネントロード時発火する関数
     */
    componentWillLoad() {
        this.field = generateField(this.x, this.y);
    }
    xWatch() {
        this.field = generateField(this.x, this.y);
    }
    yWatch() {
        this.field = generateField(this.x, this.y);
    }
    render() {
        return h("table", null, this.field.map((xArr) => h("tr", null, xArr.map((num) => h("th", null, num)))));
    }
    static get watchers() { return {
        "x": ["xWatch"],
        "y": ["yWatch"]
    }; }
    static get style() { return ""; }
}

export { Othello as ks_othello };
