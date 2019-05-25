'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./counting-othello-9eb8abbb.js');

const defineCustomElements = (win, options) => {
  return __chunk_1.patchEsm().then(() => {
    __chunk_1.bootstrapLazy([["ks-othello.cjs",[[1,"ks-othello",{"x_length":[2],"y_length":[2],"field":[32],"player":[32],"maxval":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
