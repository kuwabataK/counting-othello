import { a as patchBrowser, b as globals, c as bootstrapLazy } from './counting-othello-a8681c23.js';

patchBrowser().then(resourcesUrl => {
  globals();
  return bootstrapLazy([["ks-othello",[[1,"ks-othello",{"x":[2],"y":[2],"field":[32]}]]],["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], { resourcesUrl });
});
