// this code for setup in expjs always

// first express js application

// const express = require('express')
import express from 'express' //es6

const app = express()

const port = process.env.PORT || '3000'

app.get('/', (req, res) => {
    res.send('Hello guysss...')
})

app.listen(port, () => {
    console.log(`Server listening at  http://localhost:${port}`)
})