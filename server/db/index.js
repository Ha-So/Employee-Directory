const mongoose = require('mongoose')
const dotenv = require('dotenv')
/*
const DB_PASS = process.env.DB_PASS
const MONGO_URI = process.env.MONGO_URI
const uri = `mongodb+srv://adminHS:${DB_PASS}@cluster0.tgran.mongodb.net/EmployeeDirectory?retryWrites=true&w=majority`
*/
const result = dotenv.config()

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