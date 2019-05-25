import { Component, Prop, h, State, Watch } from '@stencil/core';
import { generateField } from '../../utils/utils';

@Component({
  tag: 'ks-othello',
  styleUrl: 'othello.css',
  shadow: true
})
export class Othello {
  /**
   * The first name
   */
  @Prop() x: number = 9

  /**
   * The middle name
   */
  @Prop() y: number = 9

  @State() field: number[][] = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

  /**
   * コンポーネントロード時発火する関数
   */
  componentWillLoad() {
    this.field = generateField(this.x, this.y)
  }

  @Watch('x')
  xWatch() {
    this.field = generateField(this.x, this.y)
  }

  @Watch('y')
  yWatch() {
    this.field = generateField(this.x, this.y)
  }

  render() {
    return <table>
      {this.field.map((xArr) => 
        <tr>
          {xArr.map((num) => 
            <th>{num}</th>
          )}
        </tr>
      )}
    </table>
  }
}
