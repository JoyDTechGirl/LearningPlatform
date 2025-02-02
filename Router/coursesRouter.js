const {createCourse,getAllCourse,getOneCourse} = require('../Controller/coursesController')

const router = require('express').Router()

router.post('/courses',createCourse)
router.get('/courses',getAllCourse)
router.get('/courses',getOneCourse)

module.exports = router;