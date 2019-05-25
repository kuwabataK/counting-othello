import { h } from '@stencil/core';
import { generateField, calcReverseField } from '../../utils/utils';
import _ from 'lodash';
export class Othello {
    constructor() {
        /**
         * xLength of Field
         */
        this.x_length = 8;
        /**
         * yLength of Field
         */
        this.y_length = 8;
        this.field = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
        this.player = 0;
        this.maxval = 1000;
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
    /**
     * オセロをおいたときの処理
     *
     * @param e
     * @param x
     * @param y
     */
    clickSlot(e, x, y) {
        e.stopPropagation();
        if (this.field[y][x] !== 0) {
            return;
        }
        let newField = _.cloneDeep(this.field);
        newField[y][x] = this.field[y][x] + this.player + 1;
        newField = calcReverseField(x, y, newField, this.maxval);
        if (_.flatten(this.field).reduce((a, b) => a + b) + this.player + 1
            == _.flatten(newField).reduce((a, b) => a + b)) {
            return;
        }
        this.field = newField;
        this.player = this.player === 1 ? 0 : 1;
    }
    /**
     * 各色のコマの数を返す
     * @param color
     */
    countCellNum(color) {
        if (color === 'red') {
            return _.flatten(this.field).reduce((acc, cur) => {
                return cur % 2 === 1 ? acc + 1 : acc;
            });
        }
        else {
            return _.flatten(this.field).reduce((acc, cur) => {
                return cur !== 0 && cur % 2 === 0 ? acc + 1 : acc;
            });
        }
    }
    /**
   * 各色の値の合計値を返す
   * @param color
   */
    countCellSum(color) {
        if (color === 'red') {
            return _.flatten(this.field).reduce((acc, cur) => {
                return cur % 2 === 1 ? acc + cur : acc;
            });
        }
        else {
            return _.flatten(this.field).reduce((acc, cur) => {
                return cur % 2 === 0 ? acc + cur : acc;
            });
        }
    }
    /**
   * inputの中身が変わったときに結果を再計算し、
   * changeResultイベントを発火して呼び出し元に伝える
   *
   * @param event
   */
    handleMaxValChange(event) {
        this.maxval = event.target["value"];
    }
    render() {
        return h("div", null,
            h("table", null, this.field.map((xArr, yIndex) => h("tr", null, xArr.map((num, xIndex) => h("th", { class: [
                    'cell',
                    num === 0 ? 'unuse' : 'use',
                    num % 2 === 0 ? 'blue' : 'red'
                ].join(' '), onClick: (e) => this.clickSlot(e, xIndex, yIndex) },
                h("div", null, num)))))),
            h("div", { class: ['teban',
                    this.player === 0 ? 'red' : 'blue'
                ].join(' ') }, this.player === 0
                ? 'レッドの番だよ!!'
                : 'ブルーの番だよ！！'),
            h("div", null, 'レッドのセルの数：' + this.countCellNum('red')),
            h("div", null, 'ブルーのセルの数：' + this.countCellNum('blue')),
            h("div", null, 'レッドのセルの中の合計値：' + this.countCellSum('red')),
            h("div", null, 'ブルーのセルの中の合計値：' + this.countCellSum('blue')),
            h("div", { class: "cp_iptxt" },
                "\u8A31\u3055\u308C\u308B\u30BB\u30EB\u306E\u5024\u306E\u6700\u5927\u5024\uFF1A",
                h("input", { type: "number", value: this.maxval, onChange: (event) => { this.handleMaxValChange(event); } })));
    }
    static get is() { return "ks-othello"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["othello.css"]
    }; }
    static get styleUrls() { return {
        "$": ["othello.css"]
    }; }
    static get properties() { return {
        "x_length": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "xLength of Field"
            },
            "attribute": "x_length",
            "reflect": false,
            "defaultValue": "8"
        },
        "y_length": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "yLength of Field"
            },
            "attribute": "y_length",
            "reflect": false,
            "defaultValue": "8"
        }
    }; }
    static get states() { return {
        "field": {},
        "player": {},
        "maxval": {}
    }; }
    static get watchers() { return [{
            "propName": "x",
            "methodName": "xWatch"
        }, {
            "propName": "y",
            "methodName": "yWatch"
        }]; }
}
