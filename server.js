const express = require("express");
const router = require("./Router/usersRouter");
const courseRouter = require("./Router/coursesRouter");
const enrollmentsRouter = require("./Router/enrollments");

const PORT = 4041;
const app = express();

app.use(express.json());

app.use(router);
app.use(courseRouter);
app.use(enrollmentsRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
