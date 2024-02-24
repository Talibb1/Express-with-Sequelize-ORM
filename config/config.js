// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize("school", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
// });

// try {
//   sequelize.authenticate();
//   console.log("Connection has been established successfully.");
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }

const { Sequelize, DataTypes } = require("sequelize");

const databaseConfig = {
  database: "school",
  username: "root",
  host: "localhost",
  dialect: "mysql",
  logging: false, // Disable Sequelize logging ( SELECT 1+1 AS result )
};

const sequelize = new Sequelize(databaseConfig);

// Function to connect to the database
async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connection to the database has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.students = require("../models/students")(sequelize, DataTypes);
db.contact = require("../models/contact")(sequelize, DataTypes);

db.sequelize.sync({ force: true });  // yah jo hai vo jetne bhi models hun ge unsub ko sun ker day ga
// User.sync();        // yah table create ker ta hai ager table database mi na ho
// User.sync({ force: true });   // ager table database mi hai to vo is ko phale delete kare ga or phir se create kare ga
// User.sync({ alter: true });  //  yah jo hai tables mi jo changes hai sarif unhe change kare ga

module.exports = { db, connectToDatabase };


// // Define models
// const StudentsModel = require("../models/students")(sequelize, DataTypes);
// const ContactModel = require("../models/contact")(sequelize, DataTypes);

// // Function to sync models with the database
// async function syncDatabase() {
//   try {
//     // Synchronize models with the database and force the creation of tables
//     await sequelize.sync({ force: true });
//     console.log("Models synchronized with the database.");
//   } catch (error) {
//     console.error("Unable to synchronize models with the database:", error);
//   }
// }

// // Export the Sequelize instance, connect function, and sync function
// module.exports = { sequelize, connectToDatabase, StudentsModel, ContactModel, syncDatabase };

