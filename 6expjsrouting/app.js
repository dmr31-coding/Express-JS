// routing

import express from 'express'

const app = express()

const port = process.env.PORT || '3000'

//route create 
// app.get('/', function (req, res) {
//     res.send('Get Method')
// })

//navako path dida
// .all method chai all kind of request handle ko lagi
// app.all('*', (req, res) => {
//     res.send('Page not found ...')
// })

//one callback 
// app.get('/callbackeg', (req, res) => {
//     res.send('One callback example')
// })

//More than one callback 
// app.get('/callbackegg', (req, res, next) => {
//     console.log('First callback')
//     next()
    
// }, (req, res) => {
//     console.log('Second callback')
//     res.send('More than One callback example')
// })

// an array of callback
const cb1 = (req, res, next) => {
    console.log('first callback')
    next()
}
const cb2 = (req, res, next) => {
    console.log('second callback')
    next()
}
const cb3 = (req, res) => {
    console.log('third callback')
    res.send('an array of callback example')
}
app.get('/callbeg', [cb1, cb2, cb3])


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})