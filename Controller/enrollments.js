const { enrollments } = require('../models');
const { v4: uuidv4 } = require('uuid');

exports.createEnrollment = async (req, res) => {
  try {
    const { userId, courseId } = req.params;

    const existingEnrollment = await enrollments.findOne({
      where: {
        userId: userId,
        courseId: courseId,
      }
    });

    if (existingEnrollment) {
      return res.status(400).json({ message: 'User already enrolled in this course' });
    }
    const data = {
      id: uuidv4(),
      userId: userId,
      courseId: courseId,
    };
    const newEnrollment = await enrollments.create(data);
    res.status(201).json({ message: 'Enrollment Created Successfully', data: newEnrollment });

  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
}
