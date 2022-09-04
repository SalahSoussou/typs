console.log('hi')
//Literal Types =====

function compare(num1: number, num2: number): 0 | 1 | -1 {
    return num1 === num2 ? 0 : num1 < num2 ? 1 : -1
}


// Tuple =======================

let data2: readonly [number, string, boolean] = [22, 'Title', true]


// Enums
enum Kids {
    five = 7,
    six = 8,
    seven = 9
}


enum Value {
    small = Kids.seven,
    mid = 20,
    large = 30,
    xlarge = 40
}
let size: string = "s"

if (size === 's') console.log(`your size is ${Value.small}`)

// ====== Type Assertions

let myImg = document.getElementById('bgImg') as HTMLImageElement;
// console.log(myImg.src)

