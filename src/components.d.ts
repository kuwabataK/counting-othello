/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface KsOthello {
    /**
    * xLength of Field
    */
    'x_length': number;
    /**
    * yLength of Field
    */
    'y_length': number;
  }
}

declare namespace LocalJSX {
  interface KsOthello extends JSXBase.HTMLAttributes {
    /**
    * xLength of Field
    */
    'x_length'?: number;
    /**
    * yLength of Field
    */
    'y_length'?: number;
  }

  interface IntrinsicElements {
    'ks-othello': KsOthello;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


declare global {



  interface HTMLKsOthelloElement extends Components.KsOthello, HTMLStencilElement {}
  var HTMLKsOthelloElement: {
    prototype: HTMLKsOthelloElement;
    new (): HTMLKsOthelloElement;
  };

  interface HTMLElementTagNameMap {
    'ks-othello': HTMLKsOthelloElement;
  }

  interface ElementTagNameMap extends HTMLElementTagNameMap {}
}

