import express from 'express'
import mongoose from 'mongoose'

const categories = ["Food", 'Gaming', 'Coding', 'Other']

const entries = [
    { category: 'Food', content: 'Pizza is yummy' },
    { category: 'Coding', content: 'Coding is fun!'},
    { category: 'Gaming', content: 'Lets PWN some NWBS'}
]

// connect mongoose Object Data Modelling as early as possible; between / and ? put _dbname_
mongoose.connect('')

    .then(m => console.log(m.connection.readyState === 1 ? 'MongoDB connected!' : "MongoDB failed to connect"))
    .catch(err => console.error(err))

//connect to schema, entity name plural + Schema
const entriesSchema = new mongoose.Schema({
    // each entry is a key and data type, required = true for validation
    category: { type: String, required: true },
    content: { type: String, required: true }
})

// create model, give it an identifying name, singular; which schema defines the model
const EntryModel = mongoose.model('Entry', entriesSchema)

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


app.get('/entries/foo', (req, res) => res.send({foo: 'bar'}))

app.get('/entries/:id', (req, res) => {
    const entry = entries[req.params.id - 1]
    if (entry) {4
        res.send(entry)
    } else {
        res.status(404).send({error: "No entry found"})
    }
    // console.log(req.params)
    // res.sendStatus(204)
})

// make post handler async and await result
app.post('/entries', async (req, res) => {
        try {//1. get entry data from the request
        // console.log(req.body)
        //2 TODO: validate / make sure in the correct format
        //3. create a new entry object
        //4. push the new entry to the array
        // // instead of pushing to an array, 
        const insertedEntry = await EntryModel.create(req.body)
        // entries.push(req.body)
        //5. respond with 201 and the created entry; push to array
        // res.status(201).send((entries[entries.length - 1]))

        res.status(201).send(insertedEntry)
        }
        catch (err) {
            res.status(400).send({ error: err.message})
        }
})

// starts server, listens to connections on ports
app.listen(4001)

