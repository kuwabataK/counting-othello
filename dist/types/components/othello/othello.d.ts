export declare class Othello {
    /**
     * xLength of Field
     */
    x_length: number;
    /**
     * yLength of Field
     */
    y_length: number;
    field: number[][];
    player: 0 | 1;
    maxval: number;
    /**
     * コンポーネントロード時発火する関数
     */
    componentWillLoad(): void;
    xWatch(): void;
    yWatch(): void;
    /**
     * オセロをおいたときの処理
     *
     * @param e
     * @param x
     * @param y
     */
    private clickSlot;
    /**
     * 各色のコマの数を返す
     * @param color
     */
    private countCellNum;
    /**
   * 各色の値の合計値を返す
   * @param color
   */
    private countCellSum;
    /**
   * inputの中身が変わったときに結果を再計算し、
   * changeResultイベントを発火して呼び出し元に伝える
   *
   * @param event
   */
    handleMaxValChange(event: Event): void;
    private reset;
    render(): any;
}
