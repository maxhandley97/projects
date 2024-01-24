import { EntryModel, closeConnection } from "./db.js"



const entries = [
    { category: 'Food', content: 'Pizza is yummy' },
    { category: 'Coding', content: 'Coding is fun!'},
    { category: 'Gaming', content: 'Lets PWN some NWBS'}
]

await EntryModel.deleteMany()
console.log('Deleted entries')
await EntryModel.insertMany(entries)
console.log('Added entries')

//int for interrupt
closeConnection() 