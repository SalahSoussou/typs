"use strict";
class cUser {
    constructor(_name, id) {
        this._name = _name;
        this.id = id;
        this.meth = () => `hello ${this.name} ${this.id}`;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
let userOne = new cUser('salae', 345);
console.log(userOne.meth());
//# sourceMappingURL=deep.js.map