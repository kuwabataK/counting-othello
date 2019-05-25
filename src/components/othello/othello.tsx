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

  @State() field: number[][] = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

  @State() player: 0 | 1 = 0

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

  private clickSlot(e: Event, x: number, y: number) {
    e.stopPropagation()
    if (this.field[y][x] !== 0) {
      return
    }
    this.field[y][x] = this.field[y][x] + this.player + 1
    this.player = this.player === 1 ? 0 : 1
    this.field = calcReverseField(x, y, this.field)
  }

  render() {
    return <table>
      {this.field.map((xArr, yIndex) =>
        <tr>
          {xArr.map((num, xIndex) =>
            <th onClick={(e) => this.clickSlot(e, xIndex, yIndex)} >{num}</th>
          )}
        </tr>
      )}
    </table>
  }
}
