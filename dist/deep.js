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
class Static {
    constructor(uname) {
        this.uname = uname;
        Static.createdObjs++;
    }
    static getCount() {
        console.log(`${this.createdObjs} objects created`);
    }
}
Static.createdObjs = 0;
let u1 = new Static('ala');
let u2 = new Static('hello');
let u3 = new Static('test');
let u4 = new Static('hi');
Static.getCount();
class Player {
    constructor(name) {
        this.name = name;
    }
    attack() {
        console.log('attack');
    }
}
class Colt extends Player {
    constructor(name, bulits) {
        super(name);
        this.bulits = bulits;
    }
    attack() {
        super.attack();
        console.log('boulits');
        this.bulits -= 1;
    }
}
class King extends Player {
    constructor(name, axeHp) {
        super(name);
        this.axeHp = axeHp;
    }
    attack() {
        super.attack();
        console.log('axe');
        this.axeHp -= 1;
    }
}
let king = new King('barb', 100);
console.log(king.name);
king.attack();
console.log(king.axeHp);
function retuenAnyType(val) {
    return val;
}
console.log(retuenAnyType(100));
console.log(retuenAnyType('Salah'));
console.log(retuenAnyType(true));
function retuenString(val, num) {
    return `${val}and ${num} in string format`;
}
class Collection {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
}
let itemOne = new Collection();
itemOne.add({ itemtype: 'Book', title: 'my Book', id: 235 });
itemOne.add({ itemtype: 'BookY :D', title: 'my Book 2', id: 888885 });
console.log(itemOne);
//# sourceMappingURL=deep.js.map