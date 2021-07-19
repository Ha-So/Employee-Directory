const mongoose = require('mongoose')
const dotenv = require('dotenv')
const result = dotenv.config()
// Ensure the correct .env file is in server/.env with the appropriate URI variable that contains DB name and password

/*
if (result.error) {
  throw result.error
}
console.log(result.parsed.MONGO_URI)
*/

mongoose
    .connect(result.parsed.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db