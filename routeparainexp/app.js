// routing (common for all application)

import express from 'express'

const app = express()

const port = process.env.PORT || '3000'

app.get('/student/delete/:id', (req,res) => {
    res.send('student deleted')
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
