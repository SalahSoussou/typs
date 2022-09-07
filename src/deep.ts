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

class Static {
    static createdObjs: num = 0
    static getCount(): void {
        console.log(`${this.createdObjs} objects created`)
    }
    constructor(public uname: str) {
        Static.createdObjs++
    }
}

let u1 = new Static('ala')
let u2 = new Static('hello')
let u3 = new Static('test')
let u4 = new Static('hi')

Static.getCount()

// Polymorphism ================


class Player {
    constructor(public name: str) { }
    attack(): void {
        console.log('attack')
    }
}

class Colt extends Player {
    constructor(name: str, public bulits: num) {
        super(name)
    }
    override attack(): void {
        super.attack()
        console.log('boulits')
        this.bulits -= 1
    }
}

class King extends Player {
    constructor(name: str, public axeHp: num) {
        super(name)
    }
    override attack(): void {
        super.attack()
        console.log('axe')
        this.axeHp -= 1
    }
}

let king = new King('barb', 100)

console.log(king.name)
king.attack()
console.log(king.axeHp)

// ====================================================================

function retuenAnyType<T>(val: T): T {
    return val;
}

console.log(retuenAnyType<num>(100))
console.log(retuenAnyType<str>('Salah'))
console.log(retuenAnyType<bl>(true))

function retuenString<S, N>(val: S, num: N): string {
    return `${val}and ${num} in string format`;
}


//++++++++++++++++++++++++++++++++++++
interface Book {
    itemtype: string;
    title: string;
    id: number
}

class Collection<T>{
    public data: T[] = []
    add(item: T): void {
        this.data.push(item)
    }
}

let itemOne = new Collection<Book>()
itemOne.add({ itemtype: 'Book', title: 'my Book', id: 235 })
itemOne.add({ itemtype: 'BookY :D', title: 'my Book 2', id: 888885 })

console.log(itemOne)