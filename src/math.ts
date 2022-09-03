let theTame: string = 'Salah'
let theage: number = 23
let hire: boolean = true
let allTyps: any = 'trst'


theTame = 'ok'
allTyps = 2022
function add(a: number, b: number) {
    return a + b
}
console.log(add(8, 5))
console.log(add(8, 22))

let arrOne: number[] = [1, 3, 5, 6]
let arrTwo: (number | string)[] = ['he', 'llo', 4, 3, 5, 6]
let arrThree: (number | string | string[])[] = ['he', 'llo', 4, 3, 5, 6, ['salah', 'olla']]

let mesag = true
function showInfo(name: string, age: number, salary: number): string {
    let greet = 'hi'
    if (mesag) {
        return greet + `name is${name} age${age} salary  ${salary}`
    }
    return `no data`
}
console.log(showInfo('salah', 23, 10000))

//================================================================


function data(name: string = 'no name', age: number = 23, extra?: any) {
    return name + '  ' + age + extra
}

console.log(data(undefined, 20))

// Rest parameter =================================================

function addAll(...nums: number[]): number {
    let result = 0;
    nums.forEach(num => {
        result += num
    })
    return result;
}

console.log(addAll(22, 45, 87, 3454, 66, -3555))


// arrow & anonymous functions ========================
const concat = function (str: string, num: number): string {
    return `${str} num:${num}`
}

console.log(concat('hello', 2022))

const arrow = (num: number, num2: number): number => num + num2
console.log(arrow(33, 56))


// ==================================== mor data typs
// Alias

type num = number
type str = string
type bl = boolean
type numOrStr = number | string

let total: num = 1222
let names: str = 'salah'
let stat: bl = false

//=====================
type Buttons = {
    up: string,
    down: string
}
type fuulBtns = Buttons & {
    x: boolean,

}


// function roll(btns: Buttons) {
//     console.log(`value: ${btns.up}`)
//     console.log(`value: ${btns.down}`)
// }
// roll({up:'up',down:'down'})

function roll(btns: fuulBtns) {
    console.log(`value: ${btns.up}`)
    console.log(`value: ${btns.down}`)
    console.log(`value: ${btns.x}`)
}
roll({ up: 'up', down: 'down', x: true })