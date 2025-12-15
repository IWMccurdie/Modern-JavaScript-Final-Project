const router = require('express').Router()
const { connectDB } = require('../../../config/db')

// GET all events (for testing)
router.get('/', async (request, response) => {
    try {
        const db = await connectDB()
        const allEvents = await db.collection('events').find({}).toArray()
        response.json(allEvents)
    } catch (error) {
        response.status(500).json({ error: error.message })
    }
})

// GET specific event by ID
router.get('/:id', async (request, response) => {
    try {
        const db = await connectDB()
        const found = await db.collection('events').findOne({ id: request.params.id })
        if (found) return response.send(found)
        response.status(400).json({ message: "Event not found" })
    } catch (error) {
        response.status(500).json({ error: error.message })
    }
})

// POST a new event
router.post('/', async (req, res) => {
    try {
        const db = await connectDB()
        const result = await db.collection('events').insertOne(req.body)
        res.json({ _id: result.insertedId, ...req.body })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = router
