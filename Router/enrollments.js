const {createEnrollment} = require('../Controller/enrollments')

const router = require('express').Router()

router.post('/enroll',createEnrollment)


module.exports = router;
