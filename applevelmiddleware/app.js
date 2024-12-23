
// routing (common for all application)

import express from 'express'

const app = express()

const port = process.env.PORT || '3000'

import web from './routes/web.js'
import myLogger from './middlewares/logger-middleware.js'

// set templatte engine
app.set('view engine', 'ejs')

// appliation level middleware
// app.use(myLogger)
app.use('/about', myLogger)
app.use('/about/23', myLogger)
app.use('/about/34', myLogger)



// load routes
app.use('/', web)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})

