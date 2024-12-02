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
// app.get('/student/delete/:id([0-9]{2})', (req,res) => {
//     console.log(req.params)
//     res.send(`student deleted ${req.params.id}`)
// })

// app.get('/:type(post|article)/:id', (req,res) => {
//     console.log(req.params)
//     res.send('post or article')
// })


// // app.param()
// app.param('id', (req, res, next, id) => {
//     console.log(` called only once Id: ${id}`)
//     next()
// })

// app.get(`/user/:id`, (req, res) => {
//     console.log("this is user id path")
//     res.send('Response correct')
// })


// app.param() -> array of route parameter
app.param(['id', 'page'], (req, res, next, value) => {
    console.log(` called only once: ${value}`)
    //above callback execute only once for its route para. but not for other similar path
    next()
})

app.get('/user/:id/:page', (req, res, next) => {
    console.log("this is user id path 1")
    next()
})

app.get('/user/:id/:page', (req, res) => {
    console.log("this is user id path 2")
    res.send('Response correct')
})


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
