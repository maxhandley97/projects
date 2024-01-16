// document = reference to html element in html file

// const el = document.querySelector('#foo')

// // querySelector will always return one element aka the first element
// const el = document.querySelector('li')

// const el = document.querySelectorAll('li')

// const el = document.querySelector('.bar')

// const el = document.getElementById("foo")

// el.innerHTML = 'Hello <span style="color: red">World!</span>'

// console.log(el)
// temp0.innerText = "Hello"



// console.log(newDiv)

// // to insert at the end
// document.body.appendChild(newDiv)

// document.querySelector('#foo').appendChild(newDiv)


// // to create an element, for getting data from a foreign api, tag type in parenthesis
// // to insert element in specific spot, sibling of ul
// const newDiv = document.createElement('div')
// newDiv.innerHTML = '<h3>Awesome <span style="color: red">content!</span<></h3>'
// newDiv.id = 'spam'
// newDiv.style.color = 'blue'
// document.body.insertBefore(newDiv, document.querySelector('ul'))

const myColor = 'blue'
document.body.innerHTML += `<div id="spam" style="color: ${myColor}"></h3> Awesome content!</h3></div>`

const items = [
    'Adding to the DOM',
    'Querying the DOM',
    'Changing the DOM',
    'Event Listeners'
]

const ul = document.querySelector('ul')
// let declares item, of is value, in is index
// for (let item of items) {
//     ul.innerHTML += `<li> ${item}</li>`
    // // Another way
    // const newLi = document.createElement('li')
    // newLi.innerText = item
    // ul.appendChild(newLi)
// }

const lis = items.map(item => `<li> ${item}</li>`)
console.log(lis)
ul.innerHTML = lis.join("")

// Handle a mouse click on the h1 element
// document.querySelector('h1').addEventListener('click', (event) => event.target.innetText += '!')

const newItem = document.querySelector('#newItem')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    (ul.innerHTML += `<li> ${newItem.value}</li>`)
    newItem.value = ''
})
