"use strict";
// function greet(person: string, date: Date) {
//     console.log(`Hello ${person}, today is ${date.toDateString()}`);
// }
function printCoord(pt) {
    console.log(`The coord X is ${pt.x}`);
    console.log(`The coord Y is ${pt.y}`);
    if (pt.z) {
        console.log(`The coord Z is ${pt.z}`);
    }
}
printCoord({ x: 0, y: 7 });
// union type |
// void === this function doesn't return anything
// opposite of any, absence of a type
const printId = (id) => {
    console.log(`Your ID is ${id}`);
};
const input = '12345'; // imagine it came from the user
printId(input);
printId(789);
var Sizes;
(function (Sizes) {
    Sizes[Sizes["XS"] = 0] = "XS";
    Sizes[Sizes["S"] = 1] = "S";
    Sizes[Sizes["M"] = 2] = "M";
    Sizes[Sizes["L"] = 3] = "L";
    Sizes[Sizes["XL"] = 4] = "XL";
})(Sizes || (Sizes = {}));
const item = { color: 'white', size: Sizes.M };
class Dog {
    constructor(name, age, breed) {
        this.breed = '';
        this.name = '';
        this.age = 0;
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
    greet() { console.log(`Woof! My name is ${this.name}`); }
}
let ted = new Dog('Ted', 15, 'Border Collie');
// ted = 'Fido'
ted.greet();
console.log(ted.age);
