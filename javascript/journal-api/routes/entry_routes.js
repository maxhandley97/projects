import { Router } from "express"
import { EntryModel } from "../db.js"

const router = Router()

router.get('/', async (req, res) => res.send(await EntryModel.find().populate('category')))

router.get('/foo', (req, res) => res.send({foo: 'bar'}))

router.get('/:id', async (req, res) => {
    // use findOne instead of find to get object without being in an array {_id: req.params.id}
    // or use finById 
    const entry = await EntryModel.findById(req.params.id).populate('category')
    console.log(entry)
    if (entry) {
        res.send(entry)
    } else {
        res.status(404).send({error: "No entry found"})
    }
    // console.log(req.params)
    // res.sendStatus(204)
})

// // make post handler async and await result
// Router.post('', async (req, res) => {
//         try {//1. get entry data from the request
//             // console.log(req.body)
//             //2 TODO: validate / make sure in the correct format
//             //3. create a new entry object
//             //4. push the new entry to the array
//             // // instead of pushing to an array, 
//             const insertedEntry = await EntryModel.create(req.body)
//             // entries.push(req.body)
//             //5. respond with 201 and the created entry; push to array
//             // res.status(201).send((entries[entries.length - 1]))

//             res.status(201).send(insertedEntry)
//         }
//         catch (err) {
//             res.status(500).send({ error: err.message})
//         }
// })

// // uses much more querying to work
// Router.post('', async (req, res) => {
//     try {
//         const cat = await CategoryModel.findOne({ name: req.body.category })
//         if (cat) {
//             req.body.category = cat._id
//             const insertedEntry = await EntryModel.create(req.body)
//             res.status(201).send(insertedEntry)
//         } else {
//             res.status(404).send({ error: 'Category not found'})
//         }
        
//     }
//     catch (err) {
//         res.status(500).send({ error: err.message})
//     }
// })

// this method doesn't query, therefore more efficient
// make post handler async and await result, way of doing 
router.post('/', async (req, res) => {
    try {
        // const cat = await CategoryModel.findOne({ name: req.body.name })
        const insertedEntry = await EntryModel.create(req.body)
        res.status(201).send(insertedEntry)
    }
    catch (err) {
        res.status(500).send({ error: err.message})
    }
})

router.put('/:id', async (req, res) => {
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

router.delete('/:id', async (req, res) => {
    try {
        const deletedEntry = await EntryModel.findByIdAndDelete(req.params.id)
        if (deletedEntry) {
            res.sendStatus(204)
        } else {
            res.status(404).send({ error: 'entry not found' })
        }
    }
    catch (err) {
        res.status(500).send({ error: err.message})
    }
})

export default router