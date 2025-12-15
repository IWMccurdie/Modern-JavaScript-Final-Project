const { MongoClient } = require('mongodb')

const uri = process.env.MONGODB_URI || 'mongodb+srv://michaelgfrascona:jWFDs3IrCrQA4Nur@js-final-project.mn2osqj.mongodb.net/?appName=JS-Final-Project'
const client = new MongoClient(uri)

let db

async function connectDB() {
    if (!db) {
        await client.connect()
        db = client.db('Food-Truck-DB')
    }
    return db
}

module.exports = { connectDB }