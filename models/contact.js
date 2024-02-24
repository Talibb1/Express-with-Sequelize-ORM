module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define(
    "Contact",
    {
      // Model attributes are defined here

      phoneNo: {
        type: DataTypes.STRING,
        defaultValue: "Insert the data ",
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        defaultValue: "Insert the data ",
        allowNull: false,
        // allowNull defaults to true
      },
    },
    {
      // Other model options go here
      tableName: "contact",
      modelName: "contactdb",
    }
  );
  // `sequelize.define` also returns the model
//   console.log(Contact === sequelize.models.Contact);   // true
return Contact;
};
