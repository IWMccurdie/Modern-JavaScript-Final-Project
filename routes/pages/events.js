const router = require('express').Router()
const path = require('path')
const root = path.join(__dirname, '..', '..', 'public')

router.get('/event/:eventid', (_, response) => response.sendFile('events.html', { root }))

module.exports = router