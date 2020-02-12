import { QueryBuilder } from 'knex'
import db from '../../data/dbConfig'

type Id = number | string

const findRecipes = (): QueryBuilder => db('recipes')

export const findRecipeById = (id: Id): QueryBuilder =>
  db('recipes')
    .where({ id })
    .first()

const findShoppingList = (recipeId: Id): QueryBuilder =>
  db('recipes')
    .join('recipe_ingredients', 'recipes.id', 'recipe_ingredients.recipe_id')
    .join('ingredients', 'ingredients.id', 'recipe_ingredients.ingredient_id')
    .select('ingredients.name', 'ingredients.quantity')
    .where({ 'recipes.id': recipeId })

const findInstructions = (recipeId: Id): QueryBuilder =>
  db('recipes')
    .join('instructions', 'recipes.id', 'instructions.recipe_id')
    .select('instructions.step', 'instructions.instruction')
    .where({ 'recipes.id': recipeId })
    .orderBy('instructions.step')

export default {
  findRecipes,
  findShoppingList,
  findInstructions,
}
