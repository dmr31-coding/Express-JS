import express from 'express'
import { studentController } from '../controllers/studentController.js'

const router = express.Router()

import myLogger from '../middlewares/logger-middleware.js'

// router level middleware
router.use(myLogger)

//note- app level middleware sab ma kam garxa route/path define gareko thau ma
// route level middleware one file ko route define vako thau ma matra kam garxa


router.get('/student', studentController)
router.get('/event', (req, res) => {
    res.send('Events')
})

router.get('/student/12', (req, res) => {
    res.send('/Student/12')
})


export default router
