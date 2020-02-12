import Knex, { QueryBuilder } from 'knex'

exports.seed = (knex: Knex): QueryBuilder =>
  knex('ingredients').insert([
    { name: 'Cheese', quantity: 37 },
    { name: 'Tortilla', quantity: 1 },
    { name: 'Bread', quantity: 2 },
    { name: 'Poptart', quantity: 1 },
  ])
