// function adder(x, y, cb) {
//     cb(x + y) 
// }

// adder(5, 10, result => console.log(result))

// console.log("Done")

// function getJoke(cb) {
//     //2. create xhr
//     const req = new XMLHttpRequest()
//     //3. add listener for whne the response is received and parsed
//     //9. Listener callback is triggered, which in turn calls cb, passing the joke
//     req.addEventListener('load', event => cb(event.target.response.joke))
//     // 4. Open the URL with the appropriate verb
//     req.open('GET', 'https://icanhazdadjoke.com/')
//     //5. set Accept header so server can give us JSON
//     req.setRequestHeader('Accept', 'application/json')
//     //6. Set responseType so XHR object parses the JSON
//     req.responseType = 'json'
//     //7. Send the request, then immediately return from getJoke (ie. dont wait)
//     req.send()
// }
// //1. call getJoke and pass a callback funtion
// //10. Callback is called via cb in the load listener in getJoke, recieved the joke
// getJoke(joke => console.log(joke))
// //8. getJoke returned immediately, so log out message
// console.log('request sent')

function getJoke() {
    return new Promise((resolve, reject) => {
        try {
        //2. create xhr
        const req = new XMLHttpRequest()
        //3. add listener for whne the response is received and parsed
        //9. Listener callback is triggered, which in turn calls cb, passing the joke
        req.addEventListener('load', event => resolve(event.target.response.joke))
        // 4. Open the URL with the appropriate verb
        req.open('GET', 'https://icanhazdadjoke.com/')
        //5. set Accept header so server can give us JSON
        req.setRequestHeader('Accept', 'application/json')
        //6. Set responseType so XHR object parses the JSON
        req.responseType = 'json'
        //7. Send the request, then immediately return from getJoke (ie. dont wait)
        req.send()
        }
        catch(e) {
            reject(e)
        }
    })
}

// fetch function, under the hood of XHR
function fetchJoke() {
    //default verb = get
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
}   
fetchJoke() 

//1. call getJoke and pass a callback funtion
//10. Callback is called via cb in the load listener in getJoke, recieved the joke

// const jokes = []

// getJoke()
//     .then(joke => {
//         jokes.push(joke)
//         return getJoke()
//     })
//     .then(joke => {
//         jokes.push(joke)
//         return getJoke()
//     })
//     .then(joke => {
//         jokes.push(joke);
//         console.log(jokes); // Move this inside the last .then block
//     })

// const jokePromises = []
// for (let i=0; i < 3; i++) {
//     jokePromises.push(getJoke())
// }

// Promise.all(jokePromises)
//     .then(jokes => console.log(jokes))
//     .catch(err => console.error(err))

//8. getJoke returned immediately, so log out message
console.log('request sent')