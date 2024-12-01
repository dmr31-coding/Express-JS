// routing (common for all application)

import express from 'express'

const app = express()

const port = process.env.PORT || '3000'

// app.get('/student/delete/:id', (req,res) => {
//     console.log(req.params)
//     res.send('student deleted')
// })

app.get('/product/:category/:id', (req,res) => {
    console.log(req.params)
    res.send(`Product category: ${req.params.category} and product id: ${req.params.id}`)
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
