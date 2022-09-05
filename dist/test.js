"use strict";
console.log('hi');
function compare(num1, num2) {
    return num1 === num2 ? 0 : num1 < num2 ? 1 : -1;
}
let data2 = [22, 'Title', true];
var Kids;
(function (Kids) {
    Kids[Kids["five"] = 7] = "five";
    Kids[Kids["six"] = 8] = "six";
    Kids[Kids["seven"] = 9] = "seven";
})(Kids || (Kids = {}));
var Value;
(function (Value) {
    Value[Value["small"] = 9] = "small";
    Value[Value["mid"] = 20] = "mid";
    Value[Value["large"] = 30] = "large";
    Value[Value["xlarge"] = 40] = "xlarge";
})(Value || (Value = {}));
let size = "s";
if (size === 's')
    console.log(`your size is ${Value.small}`);
let user = {
    id: 100,
    username: 'salah',
    sayhello() {
        return `hello ${this.username}`;
    }
};
function userInfo(data) {
    console.log(data.id);
    console.log(data.username);
    console.log(data.sayhello);
}
console.log(user);
let userex = {
    id: 100,
    username: 'salah',
    role: 'seay hi'
};
//# sourceMappingURL=test.js.map