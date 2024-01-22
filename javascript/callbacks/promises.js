// Define the adder function
function adder(x, y) {
    return x + y
}

function adderPromise(x, y) {
    return new Promise((resolve, reject) => {
        // this is all a callback
        if (typeof x === 'number' && typeof y === 'number') {
            const answer = adder(x, y)
            resolve(answer)
        } else {
            reject('x and y must be a number')
        }
    })
}

// adderPromise(10, 20)
//     .then(value => {
//         adderPromise(value, 100)
//             .then(value => console.log(value))
//         })
//     .catch(err => console.error(err))

adderPromise(10, 20)
    .then(value => adderPromise(value, 100))
    .then(value => console.log(value))
    .catch(err => console.error(err))


// adderPromise(10, 123.5)
//     .then(value => console.log(value))
//     .catch(err => console.error(err))

console.log('Not waiting for the resolve')