module.exports = {
  development: {
    username: "root",
    password: "root",
    database: "projecttwo_db",
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: "password",
    database: "projecttwo_db",
    host: "localhost",
    dialect: "mysql",
    logging: false
  },
  production: {
    // eslint-disable-next-line camelcase
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};
