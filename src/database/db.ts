import knex from 'knex'
import * as config from './knexfile'

// select which environment to use
const configToUse = config[process.env.NODE_ENV || 'development']

const db = knex(configToUse)

export default db
