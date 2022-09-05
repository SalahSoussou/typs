// Annotation With Class

class cUser {
    n: str;
    id: num;
    meth: () => string;
    constructor(name: str, id: num) {
        this.n = name,
            this.id = id,
            this.meth = () => `hello ${this.n} ${this.id}`
    }
}

let userOne = new cUser('salae', 345)