//members levels: 0 = basic, 1 = Gold, 2 = Platinum, 3 = One day Pass
module.exports = function(sequelize, DataTypes) {
  const Member = sequelize.define("Member", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [6, 128],
          msg: "Email address must be between 6 and 128 characters in length"
        },
        isEmail: {
          msg: "Email address must be valid"
        }
      }
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  });
  Member.associate = function(models) {
    models.Member.belongsTo(models.Instructor);
  };
  return Member;
};
