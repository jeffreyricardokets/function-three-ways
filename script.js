function addSquare1(a, b) {
    let aSquare = a * a;
    let bSqaure = b * b;
    let addSquare = aSquare + bSqaure;
    let sqaureAddSquare = addSquare * addSquare;
    return sqaureAddSquare;
}
let addSquare2 = function (a, b) {
    let aSquare = a * a;
    let bSqaure = b * b;
    let addSquare = aSquare + bSqaure;
    let sqaureAddSquare = addSquare * addSquare;
    return sqaureAddSquare;
}
let addSquare3 = (a, b) => {
    let aSquare = a * a;
    let bSqaure = b * b;
    let addSquare = aSquare + bSqaure;
    let sqaureAddSquare = addSquare * addSquare;
    return sqaureAddSquare;
}

console.log(addSquare1(2, 3))
console.log(addSquare2(2, 3))
console.log(addSquare3(2, 3))