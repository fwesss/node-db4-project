import Knex, { QueryBuilder } from 'knex'

exports.seed = (knex: Knex): QueryBuilder =>
  knex('recipes').insert([
    { name: 'Quesadilla', instructions: '1: Put cheese on tortilla. 2: Heat' },
    { name: 'Poptart', instructions: '1: Put poptart in toaster 2: Eat' },
    {
      name: 'Grilled Cheese Sandwich',
      instructions: '1: Put cheese on bread. 2: Heat',
    },
  ])
