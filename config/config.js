require("dotenv").config();

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": "escaperoom",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "define": {
      "charset": "utf8",
      "timestamps": true,
      "underscored": true
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "define": {
      "charset": "utf8",
      "timestamps": true,
      "underscored": true
    }
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql",
    "define": {
      "charset": "utf8",
      "timestamps": true,
      "underscored": true
    },
    "logging": false
  }
}