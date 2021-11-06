import { INTEGER, Sequelize, STRING } from 'sequelize'

// setup a new database using database credentials set in .env
const sequelize = new Sequelize('sqlite::memory:', { logging: false })

export const Thing = sequelize.define(
  'Thing',
  {
    id: { type: INTEGER, primaryKey: true },
    name: STRING,
  },
  {},
)
