module.exports = function(sequelize, DataTypes) {
  const Instructor = sequelize.define("Instructor", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  Instructor.associate = function(models) {
    models.Instructor.hasMany(models.Member);
  };
  return Instructor;
};
