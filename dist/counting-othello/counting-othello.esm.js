import { a as patchBrowser, b as globals, c as bootstrapLazy } from './counting-othello-a8681c23.js';

patchBrowser().then(resourcesUrl => {
  globals();
  return bootstrapLazy([["ks-othello",[[1,"ks-othello",{"x_length":[2],"y_length":[2],"field":[32],"player":[32],"maxval":[32]}]]]], { resourcesUrl });
});
