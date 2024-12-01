// routing (common for all application)

import express from 'express'

const app = express()

const port = process.env.PORT || '3000'

// app.get('/student/delete/:id', (req,res) => {
//     console.log(req.params)
//     res.send('student deleted')
// })

// app.get('/product/:category/:id', (req,res) => {
//     console.log(req.params)
//     // res.send(`Product category: ${req.params.category} and product id: ${req.params.id}`)

//     //destructuring garera code xoto banako
//     const {category, id} = req.params
//     res.send(`Product category: ${category} and product id: ${id}`)

// })

// query parameter restriction with regx
app.get('/student/delete/:id([0-9]{2})', (req,res) => {
    console.log(req.params)
    res.send('student deleted ${req.params.id}')
})




app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
