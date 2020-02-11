/* eslint-disable @typescript-eslint/camelcase */
import Knex, { QueryBuilder } from 'knex'

exports.seed = (knex: Knex): QueryBuilder =>
  knex('recipe_ingredients').insert([
    { recipe_id: 1, ingredient_id: 1 },
    { recipe_id: 1, ingredient_id: 2 },
    { recipe_id: 1, ingredient_id: 3 },
    { recipe_id: 2, ingredient_id: 1 },
    { recipe_id: 2, ingredient_id: 2 },
    { recipe_id: 2, ingredient_id: 3 },
    { recipe_id: 3, ingredient_id: 1 },
    { recipe_id: 3, ingredient_id: 2 },
    { recipe_id: 3, ingredient_id: 3 },
  ])
