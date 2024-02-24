// const { DataTypes } = require("sequelize");
// const { sequelize } = require("../config/config.js");

module.exports = (sequelize, DataTypes) => {
  const Students = sequelize.define(
    "Students",
    {
      // Model attributes are defined here

      // shorthand declaration
      //   { name: DataTypes.STRING }
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        // unique: true,
        // autoIncrement: true,
        // primaryKey: true,
        // field: 'field_with_underscores',
        // defaultValue: "Insert the data ",
        // comment: 'This is a column name that has a comment'
      },
      lastName: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
    },
    {
      // Other model options go here
      tableName: "Students",
      // freezeTableName: true, // default batabase name for the same table name
      // modelName: "Schooldb",
      // timestamps: false, // don't forget to enable timestamps!
      // createdAt: false, // I don't want createdAt
      // updatedAt: "updateTimestamp", // I want updatedAt to actually be called updateTimestamp
      // underscored: true,
      // paranoid: true,
      // ***** indexing ******
      // indexes: [
      //   {
      //     unique: true,
      //     fields: ["username"],
      //   },
      // ],
      // ***** validation ******
      // age: {
      //   type: Sequelize.INTEGER,
      //   validate: {
      //     isInt: { msg: "Age must be an integer." },
      //     min: { args: [18], msg: "Age must be at least 18." },
      //   },
      // },
      // ***** defaultScope ******
      // defaultScope: {
      //   where: {
      //     active: true,
      //   },
      // },
      // ***** Scopes ******
      // scopes: {
      //   activeUsers: { where: { active: true } },
      //   adminUsers: { where: { role: "admin" } },
      // },
    }
  );
  return Students;
  // `sequelize.define` also returns the model
  // console.log(User === sequelize.models.User); // true
};
