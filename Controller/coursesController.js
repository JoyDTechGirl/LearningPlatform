const { courses } = require("../models");

const { v4: uuidv4 } = require("uuid");

exports.createCourse = async (req, res) => {
  try {
    const data = {
      id: uuidv4(),
      Title: req.body.Title,
      Instructor: req.body.Instructor,
    };
    const newCourse = await courses.create(data);
    res
      .status(201)
      .json({ message: `Users Courses successfully Created`, data: newCourse });
  } catch (err) {
    res
      .status(500)
      .json({ message: `Error Creating Courses`, error: err.message });
  }
};

exports.getAllCourse = async (req, res) => {
  try {
    const getCourse = await courses.findAll();
    res.status(200).json({ message: `Successfully`, data: getCourse });
  } catch (err) {
    res
      .status(500)
      .json({ message: `Error Fetching All Courses`, error: err.message });
  }
};

exports.getOneCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await courses.findByPk(id);
    if (!course) {
      return res.status(404).json("course not found");
    }
    res
      .status(200)
      .json({
        message: `Kindly get the course with the above id`,
        data: course,
      });
  } catch (err) {
    res
      .status(500)
      .json({
        message: `Error Getting A Particular Course`,
        error: err.message,
      });
  }
};
