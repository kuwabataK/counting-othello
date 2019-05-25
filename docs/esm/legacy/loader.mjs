import { c as patchEsm, b as bootstrapLazy } from './counting-othello-65d3ba3b.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["ks-othello", [[1, "ks-othello", { "x_length": [2], "y_length": [2], "field": [32], "player": [32], "maxval": [32] }]]]], options);
    });
};
export { defineCustomElements };
