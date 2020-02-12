const knex = require('knex')
const config = require('../knexfile').development

export default knex(config)
