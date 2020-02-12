import { Request, Response } from 'express'
import model from './recipes.model'

const getRecipes = async (_req: Request, res: Response): Promise<void> => {
  try {
    const recipes = await model.findRecipes()
    res.status(200).json(recipes)
  } catch (error) {
    res.status(500).json({ message: `Operation failed`, error })
  }
}

const getShoppingList = async (req: Request, res: Response): Promise<void> => {
  try {
    const shoppingList = await model.findShoppingList(req.params.id)
    res.status(200).json(shoppingList)
  } catch (error) {
    res.status(500).json({ message: `Operation failed`, error })
  }
}

export default { getRecipes, getShoppingList }
