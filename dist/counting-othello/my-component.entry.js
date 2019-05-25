import { e as registerInstance, f as h } from './counting-othello-a8681c23.js';
import { c as format } from './chunk-2a618cd1.js';

class MyComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return h("div", null, "Hello, World! I'm ", this.getText());
    }
    static get style() { return ""; }
}

export { MyComponent as my_component };
