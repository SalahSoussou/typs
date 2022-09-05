"use strict";
class cUser {
    constructor(name, id) {
        this.n = name,
            this.id = id,
            this.meth = () => `hello ${this.n} ${this.id}`;
    }
}
let userOne = new cUser('salae', 345);
//# sourceMappingURL=deep.js.map