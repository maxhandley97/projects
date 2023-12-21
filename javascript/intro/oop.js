// Python
// class Foo:
//     def __init__(self, name, age):
//         self.name = name
//         self.age = age
//          pass
// x = Foo()

// function Person(name, age) {
//     this.name = name
//     this.age = age

//     this.greet = () => {
//         //this. is important in the method to change it later
//         console.log(`${this.name} is ${this.age} years old`)
//     }

// }

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     // essentiall saying function greet, not needed
//     greet() {
//         console.log(`${this.name} is ${this.age} years old`)
//     }
// }

// const person = new Person('Matt', 51)
// // person.name = 'Matt'
// person.age = 52

// console.log(person)

// person.greet()

class Rectangle {
    // need to set as a private property with #
    // need to declare private members
    #width
    #height
    constructor(width, height) {
        this.#width = width
        this.#height = height
    }

    //prefix with get to getter method
    // gets a value from the object
    get width() {return this.#width}

    set width(value) {
        if (typeof value === 'number') {
            this.#width = value
        } else {
            // raise an exeption
        }
        
    }
    
    get area() {
        return this.#width * this.#height
    }
}

// Python
// class square
// class square(Rectangle):

// inheritance from Rectangle
class Square extends Rectangle {

    constructor(size=5) {
        super(size, size)
        // don't need to redeclare
        // this.#width = size
        // this.#height = size
    }

}
const x = new Square()
// console.log(x.area)


const rect = new Rectangle(10, 20)
rect.width = 'Hi'
//get turns area into property backed up by function
//changes type of to a 
// can validate values or reformat
// console.log(rect.area)

