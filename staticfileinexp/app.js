// routing (common for all application)

import express from 'express'
import { join } from 'path'

const app = express()

const port = process.env.PORT || '3000'

import web from './routes/web.js'


// static file use
app.use(express.static('public'))

//load routes
app.use('/', web)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})