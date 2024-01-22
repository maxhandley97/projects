import express from 'express'

const categories = ["Food", 'Gaming', 'Coding', 'Other']

const entries = [
    { category: 'Food', content: 'Pizza is yummy' },
    { category: 'Coding', content: 'Coding is fun!'},
    { category: 'Gaming', content: 'Lets PWN some NWBS'}
]
// to parse json data

const app = express()
// express based on philosphy of building blocks, server is little pieces each which do one thing
app.use(express.json())

// rather than having a decorator to specifiy a route and a funcition that is a route handler
//use method and pass function as a callback, method different, concept same.


// request/response are objects, automatically parsed by .get method.
app.get('/', (req, res) => res.send({info: "Journal API"}))

app.get('/categories', (req, res) => res.send(categories))

app.get('/entries/', (req, res) => res.send(entries))

app.get('/entries/:id', (req, res) => {
    const entry = entries[req.params.id - 1]
    if (entry) {
        res.send(entry)
    } else {
        res.status(404).send({error: "No entry found"})
    }
    // console.log(req.params)
    // res.sendStatus(204)
})

app.post('/entries', (req, res) => {
    //1. get entry data from the request
    console.log(req.body)
    //2 TODO: validate / make sure in the correct format
    //3. create a new entry object
    //4. push the new entry to the array
    entries.push(req.body)
    //5. respond with 201 and the created entry
    res.status(201).send((entries[entries.length - 1]))
})

// starts server, listens to connections on ports
app.listen(4001)

