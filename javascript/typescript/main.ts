// function greet(person: string, date: Date) {
//     console.log(`Hello ${person}, today is ${date.toDateString()}`);
// }

// greet('matt', new Date())

// // this function returns a number
// // Array<number> === number[]
// async function fn(x: Array<number>):Promise<number> {
//     return x.length
// }
// let firstName: string = 'Matt'

// console.log(fn([1,2,3,4,5]))

type Point = {
    x: number
    y: number
    z?: number
}

function printCoord(pt: Point) {
    console.log(`The coord X is ${pt.x}`);
    console.log(`The coord Y is ${pt.y}`)
    if (pt.z){
        console.log(`The coord Z is ${pt.z}`)
    }
}

printCoord({x: 0, y: 7})

// union type |
// void === this function doesn't return anything
// opposite of any, absence of a type
const printId= (id: number | string): void => {
    console.log(`Your ID is ${id}`)
}
const input = '12345' // imagine it came from the user

printId(input)
printId(789)

enum Sizes {
    XS,
    S,
    M,
    L,
    XL
}
// key difference between interface and type, 
// interface can inherit from each other, types can't

interface Tshirt {
    color: string
    size: Sizes
}

const item: Tshirt = { color: 'white', size: Sizes.M}

interface Animal {
    name: string
    age: number

    greet(): void
}

class Dog implements Animal {
    breed: string = ''
    readonly name: string = ''
    age: number = 0

    constructor(name:string, age:number, breed: string) {
        this.name = name
        this.age = age
        this.breed = breed
    }

    greet(): void {console.log(`Woof! My name is ${this.name}`)}
}

let ted: Dog = new Dog('Ted', 15, 'Border Collie') 

// ted = 'Fido'
ted.greet()

console.log(ted.age)

