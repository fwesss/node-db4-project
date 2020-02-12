import { Router } from 'express'
import controllers from './recipes.controllers'

const router = Router()

router.route('/').get(controllers.getRecipes)

router.route('/:id/shoppingList').get(controllers.getShoppingList)

export default router
