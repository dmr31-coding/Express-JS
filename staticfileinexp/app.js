// routing (common for all application)

import express from 'express'
import { join } from 'path'

const app = express()

const port = process.env.PORT || '3000'

import web from './routes/web.js'


// static file use
app.use(express.static(join(process.cwd(), 'public')))
// console.log(express.static(join(process.cwd(), 'public')))

//serve only specific directory then make virtual path
app.use('/css', express.static(join(process.cwd(), 'public/css')))


//load routes
app.use('/', web)

// dot file use
const options = {
    dotfiles: "ignore",
}

app.use(express.static(join(process.cwd(), 'public'), options))


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})