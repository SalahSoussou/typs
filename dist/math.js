"use strict";
let theTame = 'Salah';
let theage = 23;
let hire = true;
let allTyps = 'trst';
theTame = 'ok';
allTyps = 2022;
function add(a, b) {
    return a + b;
}
console.log(add(8, 5));
console.log(add(8, 22));
let arrOne = [1, 3, 5, 6];
let arrTwo = ['he', 'llo', 4, 3, 5, 6];
let arrThree = ['he', 'llo', 4, 3, 5, 6, ['salah', 'olla']];
let mesag = true;
function showInfo(name, age, salary) {
    let greet = 'hi';
    if (mesag) {
        return greet + `name is${name} age${age} salary  ${salary}`;
    }
    return `no data`;
}
console.log(showInfo('salah', 23, 10000));
function data(name = 'no name', age = 23, extra) {
    return name + '  ' + age + extra;
}
console.log(data(undefined, 20));
function addAll(...nums) {
    let result = 0;
    nums.forEach(num => {
        result += num;
    });
    return result;
}
console.log(addAll(22, 45, 87, 3454, 66, -3555));
const concat = function (str, num) {
    return `${str} num:${num}`;
};
console.log(concat('hello', 2022));
const arrow = (num, num2) => num + num2;
console.log(arrow(33, 56));
let total = 1222;
let names = 'salah';
let stat = false;
function roll(btns) {
    console.log(`value: ${btns.up}`);
    console.log(`value: ${btns.down}`);
    console.log(`value: ${btns.x}`);
}
roll({ up: 'up', down: 'down', x: true });
//# sourceMappingURL=math.js.map