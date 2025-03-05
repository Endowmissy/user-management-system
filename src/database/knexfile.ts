import dotenv from 'dotenv'
import path from 'path';
import { attachPaginate } from 'knex-paginate'
attachPaginate()

dotenv.config()

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: path.resolve(__dirname, "dev.sqlite3")
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: "./test.sqlite3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  },

  production: {
    client: "sqlite3",
    connection: {
      filename: "./prod.sqlite3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  }
};
