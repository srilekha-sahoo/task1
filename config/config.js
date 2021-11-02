require('dotenv').config();


module.exports = {
  development: {
    username: "postgres",
    password: "Shili@123",
    database: "task1db",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "postgres",
    password: "Shili@123",
    database: "task1db",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "postgres",
    password: "Shili@123",
    database: "task1db",
    host: "127.0.0.1",
    dialect: "postgres",
  }
}
