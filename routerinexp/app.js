// routing (common for all application)

import express from 'express'
import tea from './routers/teacher.js'

const app = express()

const port = process.env.PORT || '3000'

//load router modules
app.use('/guru', tea)



app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})