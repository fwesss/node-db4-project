import { QueryBuilder } from 'knex'
import db from '../../data/dbConfig'
import { Id } from '../../utils/crud'

export type Recipe = {
  name: string
}

const findRecipes = (): QueryBuilder => db('recipes')

const findShoppingList = (recipeId: Id): QueryBuilder =>
  db('recipes')
    .join('recipe_ingredients', 'recipes.id', 'recipe_ingredients.recipe_id')
    .join('ingredients', 'ingredients.id', 'recipe_ingredients.ingredient_id')
    .select('ingredients.name', 'ingredients.quantity')
    .where({ 'recipes.id': recipeId })

export default {
  findRecipes,
  findShoppingList,
}
