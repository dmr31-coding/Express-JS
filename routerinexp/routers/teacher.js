// const express = require('express)

import express from 'express'
const router = express.Router()


router.get('/all', (req, res) => {
    res.send('All teacher')
})
router.post('/create', (req, res) => {
    res.send('add new teacher')
})
router.put('/update', (req, res) => {
    res.send('update teacher')
})

//module.exports = router
export default router