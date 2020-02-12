import { Router } from 'express'
import getRecipeByIngredient from './ingredients.controllers'
import validateIngredientId from './middleware/validation'

const router = Router()

router.use('/:id', validateIngredientId)

router.route('/:id/recipes').get(getRecipeByIngredient)

export default router
