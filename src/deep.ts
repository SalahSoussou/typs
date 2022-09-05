// Annotation With Class

class cUser {
    public get name(): str {
        return this._name;
    }
    public set name(value: str) {
        this._name = value;
    }

    meth: () => string;
    constructor(private _name: str, protected id: num) {

        this.meth = () => `hello ${this.name} ${this.id}`
    }
}

let userOne = new cUser('salae', 345)


console.log(userOne.meth())

