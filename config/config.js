module.exports = {
  test: {
    username: process.env.user,
    password: process.env.password,
    database: process.env.database,
    host: process.env.host,
    dialect: "mysql"
  },
  development: {
    username: "root",
    password: "Zxcvbnm24!",
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
