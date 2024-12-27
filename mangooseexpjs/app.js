import express from 'express'

const app = express()

const port = process.env.PORT || '3000'

// const mangoose = require('mangoose);
import mangoose from 'mangoose';
import connectDB from './db1/connectdb1.js'

// mangoose.connect("mangodb://localhost:27017/test").then(() => {
//     console.log("connected successfully...")
// })

const DATABASE_URL = "mangodb://localhost:27017/test"

connectDB(DATABASE_URL)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})