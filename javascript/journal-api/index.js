import express from 'express'
import { CategoryModel } from './db.js'
import entryRoutes from './routes/entry_routes.js'

// to parse json data
const app = express()

// express based on philosphy of building blocks, server is little pieces each which do one thing
app.use(express.json())

// rather than having a decorator to specifiy a route and a funcition that is a route handler
//use method and pass function as a callback, method different, concept same.

// request/response are objects, automatically parsed by .get method.
app.get('/', (req, res) => res.send({info: "Journal API"}))

app.get('/categories', async (req, res) => res.send(await CategoryModel.find()))

// TOD: Move /categories to routes folder
// TODO: Complete catergories CRUD
// ADVANCED add a route to categories/:id/entries that returns all entries in the give
// ADVANCED: modify "Get /categories/:id" to embed an array of all the entries in that category

app.use('/entries', entryRoutes)

// starts server, listens to connections on ports
app.listen(4001)

