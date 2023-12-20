//while loops, not sure how many times, boolean condition met, stops
// let count = 3

// while (count > 0) {
//     console.log(count--) // -- is -=
// }

//Python
// for i in range(10):
// print(i)

// 3-part for loop
// initializater runs once, before last iteration
// condition will be tested before every iteration
// post-iteration executes after every iteration

// for (initializer; condition; post-iteration) { }

// const numbers = [1, 2, 5, 21, 44, 37]

// for (let i = 0, x=1; i < numbers.length; i++, x+=2) {
//     res.push($`{x}. $`{numbers[i]}`)
// }
// console.log(res)

// fibonacci
// for (let prev = 1, next = 1; next <= 1000; tmp = next, next=prev+next, prev=temp) {
//     console.log(next)
// }

const favFoods = ['pizza', 'pasta', 'tacos']

//Python
// for item in favFoods:
//    print(item)

// for (let item of favFoods) { //in gives indexes of items
//     console.log(item)
// }

for (let index in favFoods) {
    console.log(`${parseInt(index)+1}. ${favFoods[index]}`)
}

favFoods.forEach((food, index) => {
    console.log(`${index+1}. ${food}`)
})