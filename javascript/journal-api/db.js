import mongoose from 'mongoose'
import dotenv from 'dotenv'

// config method reads env file and sets up envioronment variables
dotenv.config()

try {
// connect mongoose Object Data Modelling as early as possible; between / and ? put _dbname_
// script will keep running until manually closed without 
    const m = await mongoose.connect(process.env.DB_URI)
        console.log(m.connection.readyState === 1 ? 'MongoDB connected!' : "MongoDB failed to connect")
}
catch(err) { 
        console.error(err) 
}

const closeConnection = () => {
    console.log('Mongoose disconnecting...')
    mongoose.disconnect()
}

// event listener raised when you terminate, to disconnect the database connection
const categoriesSchema = new mongoose.Schema({
    name: { type: String, required: true }
})

const CategoryModel = mongoose.model('Category', categoriesSchema)

//connect to schema, entity name plural + Schema
const entriesSchema = new mongoose.Schema({
    // each entry is a key and data type, required = true for validation
    category: { type: mongoose.ObjectId, ref: 'Category' },
    content: { type: String, required: true }
})

// create model, give it an identifying name, singular; which schema defines the model
const EntryModel = mongoose.model('Entry', entriesSchema)

export { closeConnection, EntryModel, CategoryModel }