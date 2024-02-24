const express = require("express");
const app = express();
const port = process.env.PORT || "3000";
const { connectToDatabase } = require("./config/config.js");
const bodyParser = require("body-parser");
const {
  addStudents,
  getStudents,
  getStudentsid,
  createStudents,
  deleteStudentsid,
  updateStudents,
} = require("./controller/student.controller.js");

// Database connection
connectToDatabase();

// show the data into the json format
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/add", addStudents);

// ####################    CRUD Operations  #################

app.get("/student", getStudents);

app.get("/student/:id", getStudentsid);

app.post("/addstudent", createStudents);

app.patch("/student", updateStudents);

app.delete("/student/del/:id", deleteStudentsid);

app.listen(port, () => {
  console.log(`sever listeners listening on port http://localhost:${port}`);
});
