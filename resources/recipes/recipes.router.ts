import { Router } from 'express'
import controllers from './recipes.controllers'
import validateRecipeId from './middleware/validation'

const router = Router()

router.use('/:id', validateRecipeId)

router.route('/').get(controllers.getRecipes)
router.route('/:id/shoppingList').get(controllers.getShoppingList)
router.route('/:id/instructions').get(controllers.getInstructions)

export default router
