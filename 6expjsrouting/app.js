// routing

import express from 'express'

const app = express()

const port = process.env.PORT || '3000'

//route create 
app.get('/', function (req, res) {
    res.send('Geet Method')
})

//navako path dida
// .all method chai all kind of request handle ko lagi
// app.all('*', (req, res) => {
//     res.send('Page not found ...')
// })

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})