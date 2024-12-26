import express from 'express'

const app = express()

const port = process.env.PORT || '3000'

// const mangoose = require('mangoose);
import mangoose from 'mangoose';

mangoose.connect("mangodb://localhost:27017/test").then(() => {
    console.log("connected successfully...")
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})