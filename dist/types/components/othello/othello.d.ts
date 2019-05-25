export declare class Othello {
    /**
     * The first name
     */
    x: number;
    /**
     * The middle name
     */
    y: number;
    field: number[][];
    /**
     * コンポーネントロード時発火する関数
     */
    componentWillLoad(): void;
    xWatch(): void;
    yWatch(): void;
    render(): any;
}
