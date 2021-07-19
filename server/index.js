
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Require dotenv early in process
const dotenv = require('dotenv')
const db = require('./db')
const employeeRouter = require("./routes/employee-router")

const app = express()

const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Employee Directory!')
})

app.use("/api", employeeRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

