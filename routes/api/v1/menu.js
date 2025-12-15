const router = require('express').Router()
const { connectDB } = require('../../../config/db')

// APIs
router.get('/:id', async (request, response) => {
    try {
        const db = await connectDB()
        const found = await db.collection('menu').findOne({ id: request.params.id })
        if (found) return response.send(found)
        response.status(400).json({ message: "Item on menu not found" })
    } catch (error) {
        response.status(500).json({ error: error.message })
    }
})

// Post route
router.post('/', async (req, res) => {
    try {
        const db = await connectDB()
        const result = await db.collection('menu').insertOne(req.body)
        res.json({ _id: result.insertedId, ...req.body })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = router