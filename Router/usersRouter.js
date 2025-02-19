const {
  createUser,
  getAllUser,
  getOne,
} = require("../Controller/usersController");

const router = require("express").Router();

router.post("/users", createUser);
router.get("/users", getAllUser);
router.get("/users/:id", getOne);

module.exports = router;
