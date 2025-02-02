const users = require("../models/users");

const { v4: uuidV4 } = require("uuid");

exports.createUser = async (req, res) => {
  try {
    const data = {
      id: uuidV4(),
      Name: req.body.Name,
      Email: req.body.Email,
    };
    const newUser = await users.create(data);
    res
      .status(201)
      .json({ message: `user created successfully`, data: newUser });
  } catch (err) {
    res
      .status(500)
      .json({ message: `Error creating User`, error: err.message });
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const allUser = await users.findAll();
    res
      .status(200)
      .json({
        message: `Kindly find all user`,
        "Total number of user": allUser.length,
        data: allUser,
      });
  } catch (err) {
    res
      .status(500)
      .json({ message: `Error Fetching All User`, error: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const oneUser = await users.findByPk(id);
    res
      .status(200)
      .json({
        message: `Kindly find the user with the above id`,
        data: oneUser,
      });
  } catch (err) {
    res
      .status(500)
      .json({ message: `Error getting a user`, error: err.message });
  }
};
