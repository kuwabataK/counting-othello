import { Component, Prop, h, State, Watch } from '@stencil/core';
import { generateField, calcReverseField } from '../../utils/utils';
import _ from 'lodash'

@Component({
  tag: 'ks-othello',
  styleUrl: 'othello.css',
  shadow: true
})
export class Othello {
  /**
   * xLength of Field
   */
  @Prop() x_length: number = 8

  /**
   * yLength of Field
   */
  @Prop() y_length: number = 8

  @State() field: number[][] = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

  @State() player: 0 | 1 = 0

  @State() maxval: number = 1000

  /**
   * コンポーネントロード時発火する関数
   */
  componentWillLoad() {
    this.field = generateField(this.x_length, this.y_length)
  }

  @Watch('x')
  xWatch() {
    this.field = generateField(this.x_length, this.y_length)
  }

  @Watch('y')
  yWatch() {
    this.field = generateField(this.x_length, this.y_length)
  }

  /**
   * オセロをおいたときの処理
   * 
   * @param e 
   * @param x 
   * @param y 
   */
  private clickSlot(e: Event, x: number, y: number) {
    e.stopPropagation()
    if (this.field[y][x] !== 0) {
      return
    }

    let newField = _.cloneDeep(this.field)
    newField[y][x] = this.field[y][x] + this.player + 1
    newField = calcReverseField(x, y, newField, this.maxval)

    if (_.flatten(this.field).reduce((a, b) => a + b) + this.player + 1
      == _.flatten(newField).reduce((a, b) => a + b)) {
      return
    }

    this.field = newField
    this.player = this.player === 1 ? 0 : 1
  }

  private countCellNum(color: 'blue' | 'red') {
    if (color === 'red') {
      return _.flatten(this.field).reduce((acc, cur) => {
        return cur % 2 === 1 ? acc + 1 : acc
      })
    } else {
      return _.flatten(this.field).reduce((acc, cur) => {
        return cur !== 0 && cur % 2 === 0 ? acc + 1 : acc
      })
    }
  }

  /**
 * inputの中身が変わったときに結果を再計算し、
 * changeResultイベントを発火して呼び出し元に伝える
 * 
 * @param event  
 */
  handleMaxValChange(event: Event) {
    this.maxval = event.target["value"]
  }

  render() {
    return <div>
      <table>
        {this.field.map((xArr, yIndex) =>
          <tr>
            {xArr.map((num, xIndex) =>
              <th class={[
                'cell',
                num === 0 ? 'unuse' : 'use',
                num % 2 === 0 ? 'blue' : 'red'
              ].join(' ')}
                onClick={(e) => this.clickSlot(e, xIndex, yIndex)} >
                <div >
                  {num}
                </div>
              </th>
            )}
          </tr>
        )}
      </table>
      <div class={['teban',
        this.player === 0 ? 'red' : 'blue'
      ].join(' ')} >
        {this.player === 0
          ? 'レッドの番だよ!!'
          : 'ブルーの番だよ！！'}</div>
      <div>{'レッドの数：' + this.countCellNum('red')}</div>
      <div>{'ブルーの数：' + this.countCellNum('blue')}</div>
      <input type="number" value={this.maxval} onChange={(event) => { this.handleMaxValChange(event) }} />
    </div>
  }
}
