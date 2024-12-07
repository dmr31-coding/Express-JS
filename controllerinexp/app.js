// routing (common for all application)

import express from 'express'

const app = express()

const port = process.env.PORT || '3000'


app.get('/student/all', (req, res) => {
    res.send('All student')
})

app.get('/student/delete/:id([0-9]{2})', (req, res) => {
    console.log(req.params)
    const {id} = req.params
    console.log(id)
    if (id == 10) {
        res.send('this id cant be deleted')
    } else {
        res.send(`student delete ${id}`)
    }
})

// controller ko kam code separate garna ko lagi ho code messy nahos vanera 
// project banauda routes folder banaune routing ko lagi ani export/import garne

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
