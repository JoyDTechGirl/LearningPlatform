const {createEnrollment} = require('../Controller/enrollments')

const router = require('express').Router()

router.post('/enroll/:id',createEnrollment)


module.exports = router;
