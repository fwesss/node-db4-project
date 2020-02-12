import { QueryBuilder } from 'knex'
import db from '../../data/dbConfig'

type Id = number | string

export const findIngredientById = (id: Id): QueryBuilder =>
  db('ingredients')
    .where({ id })
    .first()

const findRecipesByIngredient = (ingredientId: Id): QueryBuilder =>
  db('recipes')
    .join('recipe_ingredients', 'recipes.id', 'recipe_ingredients.recipe_id')
    .join('ingredients', 'ingredients.id', 'recipe_ingredients.ingredient_id')
    .select('recipes.name')
    .where({ 'ingredients.id': ingredientId })

export default findRecipesByIngredient
