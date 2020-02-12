/* eslint-disable @typescript-eslint/camelcase */
import Knex, { QueryBuilder } from 'knex'

exports.seed = (knex: Knex): QueryBuilder =>
  knex('instructions').insert([
    { recipe_id: 1, step: 1, instruction: 'Put cheese on tortilla' },
    { recipe_id: 1, step: 2, instruction: 'Heat' },
    { recipe_id: 2, step: 1, instruction: 'Put poptart in toaster' },
    { recipe_id: 2, step: 2, instruction: 'Eat' },
    { recipe_id: 3, step: 1, instruction: 'Put cheese on bread' },
    { recipe_id: 3, step: 2, instruction: 'Yum' },
  ])
