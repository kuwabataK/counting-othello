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
    /**
     * コンポーネントロード時発火する関数
     */
    componentWillLoad(): void;
    xWatch(): void;
    yWatch(): void;
    private clickSlot;
    render(): any;
}
