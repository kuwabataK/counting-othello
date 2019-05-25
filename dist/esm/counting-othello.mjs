import { a as patchBrowser, b as bootstrapLazy } from './counting-othello-65d3ba3b.js';

patchBrowser().then(resourcesUrl => {
  return bootstrapLazy([["ks-othello",[[1,"ks-othello",{"x_length":[2],"y_length":[2],"field":[32],"player":[32],"maxval":[32]}]]]], { resourcesUrl });
});
