// let str = 'Hello World!'

// console.log(3 / 2)

// console.log(Math.floor(3/2))

// let x = 5
// console.log(++x) // increments before printing value
// // increment x
// x += 1 // == x++

// console.log(x)

// console.log("123" == 123) // type coercion === standard

// console.log(typeof x)

// console.log(`Hello, ${str}`)

// let person = {
//     name: "Matt",
//     age: 51
//     }

// console.log(person['age'])
// console.log(typeof person)

// // // end index not included in read figure
// console.log(str.slice(2, 8))
// console.log(str.indexOf('l')) // finds in
// console.log(str.replace('o', '---')) // replaces first o with '---'
// console.log(str.replaceAll('o', '---')) // replaces 'o' with dashes


// // global variable, can't be changed
// const x = 'satah'

// {
// console.log(x)
// console.log(42)
// // let declares a local variable with scope
// let y = 5 
// }
// console.log(y)

// x = [1, 2, 3, true, 'Hello']

// console.log(x[x.length-1])



// function add(x, y) {
//     return x + y
// }

// anonymous function
// const add = (x, y) => {
//     return x + y
// }

// wrap in object
// const Utils = {
//     add: (x, y) => x + y, //omit a coupla things
//     squares: arr => arr.map (x => x**2), // don't need parentheses
//     double: x => x * 2
// }

// console.log(Utils.add(10, 34))
// console.log(Utils.)

// const numbers = [12, 50, 33, 32, 2]
// // map iterates over list, executes each element in list
// // const result = numbers.map(double)
// const result = numbers.map(x => x ** 2)


// console.log(numbers)
// console.log(result)

//destructuring
const people = ['Matt', 'John', 'Mary', 'Kate']

// const first = people[0]
// const second = people[1]


//another wau 
const [first, second, ...others] = people

console.log(first, second, others)

const bobBirds = ['Robin', 'Crow']
const sallyBirds = ['Bluejay', 'Cardinal']

// //concatinate, cant add extra elements
// const allBirds = bobBirds.concat(sallyBirds)

// //nested array
// const allBirds = [bobBirds, sallyBirds]

//another way of concatinating, end result array
const allBirds = [...bobBirds, ...sallyBirds, 'Kookaburra']

console.log(allBirds)
console.log(...bobBirds)

const me = {name: 'Max', age: 26, favouriteColor: 'red'}
const me2 = {...me, favouriteColor: 'blue'}

console.log(me)

console.log(me2)

