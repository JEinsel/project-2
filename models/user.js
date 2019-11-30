const bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define(
    "user",
    {
      email: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.TEXT
      },
      fName: {
        type: DataTypes.STRING
      },
      lName: {
        type: DataTypes.STRING
      },
      memberLvl: {
        type: DataTypes.STRING,
        defaultValue: 1
      }
    },
    {
      underscored: true,
      freezeTableName: true
    }
  );
  User.associate = function(models) {
    models.user.belongsTo(models.Instructor);
  };

  User.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  };

  User.validPassword = function(inputPwd, dbPwd) {
    return bcrypt.compareSync(inputPwd, dbPwd);
  };

  return User;
};
