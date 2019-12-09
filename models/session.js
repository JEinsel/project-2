const moment = require("moment");
module.exports = function(sequelize, DataTypes) {
  const Session = sequelize.define("Session", {
    date: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue("date")).format("YYYY/MM/DD hh:mm A");
      }
    }
  });
  Session.associate = function(models) {
    models.Session.belongsTo(models.Class);
    models.Session.belongsTo(models.Instructor);
  };
  return Session;
};
