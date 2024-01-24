import express from 'express'
import { EntryModel, CategoryModel } from './db.js'

const categories = ["Food", 'Gaming', 'Coding', 'Other']

// to parse json data
const app = express()

// express based on philosphy of building blocks, server is little pieces each which do one thing
app.use(express.json())

// rather than having a decorator to specifiy a route and a funcition that is a route handler
//use method and pass function as a callback, method different, concept same.

// request/response are objects, automatically parsed by .get method.
app.get('/', (req, res) => res.send({info: "Journal API"}))

app.get('/categories', async (req, res) => res.send(await CategoryModel.find()))

app.get('/entries/', async (req, res) => res.send(await EntryModel.find()))

app.get('/entries/foo', (req, res) => res.send({foo: 'bar'}))

app.get('/entries/:id', async (req, res) => {
    // use findOne instead of find to get object without being in an array {_id: req.params.id}
    // or use finById 
    const entry = await EntryModel.findById(req.params.id)
    console.log(entry)
    if (entry) {
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
            res.status(500).send({ error: err.message})
        }
})

app.put('/entries/:id', async (req, res) => {
    try {
        // first param: the id of the entry, 
        const updatedEntry = await EntryModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (updatedEntry) {
            res.send(updatedEntry)
        } else {
            res.status(404).send({ error: 'entry not found' })
        }
    }
    catch (err) {
        res.status(500).send({ error: err.message})
    }
})

app.delete('/entries/:id', async (req, res) => {
    try {
        const deletedEntry = await EntryModel.findByIdAndDelete(req.params.id)
        if (deletedEntry) {
            res.status(204).send({ 'Success': 'entry deleted' })
        } else {
            res.status(404).send({ error: 'entry not found' })
        }
    }
    catch (err) {
        res.status(500).send({ error: err.message})
    }
})

// starts server, listens to connections on ports
app.listen(4001)

