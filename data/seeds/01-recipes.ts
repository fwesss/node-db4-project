import Knex, { QueryBuilder } from 'knex'

exports.seed = (knex: Knex): QueryBuilder =>
  knex('recipes').insert([
    { name: 'Quesadilla' },
    { name: 'Poptart' },
    { name: 'Grilled Cheese Sandwich' },
  ])
