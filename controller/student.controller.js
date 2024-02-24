const { db } = require("../config/config.js");

const Students = db.students;

const addStudents = async (req, res) => {
  try {
    // create method se humm shortely kam ker sakte hai hame is mi 'save' method ko alag se used ker ne ki zarorat nhi hai
    const talib = await Students.create({
      firstName: "Talib",
      lastName: "Qazi",
    });

    // Build method se humm kam ker sakte hai mager hume is mi 'save' method ko alag se used kera pade ga
    // const talib = await Students.build({
    //   firstName: "Talib",
    //   lastName: "Qazi",
    // });

    // console.log(talib instanceof Students); // true
    // console.log(talib.firstName); // "Talib"

    // ***********   set method  *****
    // talib.set({
    //   firstName: "Talib22",
    //   lastName: "Qazi556",
    // });

    // **********    update method *********
    // await talib.update({ firstName: "Khan", lastName: "Baba" });

    // **********    Delete method    *********
    // await talib.destroy();

    // **********   Reloading an instance also give fresh data    *********
    // await jane.reload();

    // await talib.save();

    console.log("Talib was saved to the database!");
    console.log(talib.toJSON());
    res.status(200).json(talib.toJSON());
  } catch (error) {
    console.error("Error adding student:", error);
    res.status(500).json({ error: "Error adding student" });
  }
};

// ####################    CRUD Operations  #################

// *********  Get Data  *********
const getStudents = async (req, res) => {
  const allData = await Students.findAll({});
  res.status(200).json({ data: allData });
  return Students;
};

// *********  Get Data with ID  *******
const getStudentsid = async (req, res) => {
  const allData = await Students.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ data: allData });
  return Students;
};
// *********  post Data  *********
const createStudents = async (req, res) => {
    const addData = req.body;
  const allData = await Students.create(addData);
  res.status(200).json({ data: allData });
  return Students;
};

// *********  Delete Data with ID  *******
const deleteStudentsid = async (req, res) => {
    const allData = await Students.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ data: allData });
    return Students;
  };
// *********  update Data with ID  *******
const updateStudents = async (req, res) => {
    const allData = await Students.update({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ data: allData });
    return Students;
  };

module.exports = {
  addStudents,
  getStudents,
  getStudentsid,
  createStudents,
  deleteStudentsid,
  updateStudents,
};
