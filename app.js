const express = require('express')
const app = express()
const port = 3000

//middleware
app.use(express.static('public'))
app.use(express.json())

// Test route
app.get('/test', (req, res) => res.json({ message: 'Server is working' }))

//routes-backend
app.use('/api/v1/events',require('./routes/api/v1/events'))
app.use('/api/v1/menu',require('./routes/api/v1/menu'))

//routes-frontend
app.use('/',require('./routes/pages/menu'))
app.use('/',require('./routes/pages/events'))
app.use('/',require('./routes/pages/admin'))

//server
const url = 'http://localhost:3000/'
const message = `Server is running on port ${port}. Visit ${url}`
app.listen(port, () => console.log(message))