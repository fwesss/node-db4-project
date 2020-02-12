import { Request, Response } from 'express'
import findRecipesByIngredient from './ingredients.model'

const getRecipesByIngredient = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const recipes = await findRecipesByIngredient(req.params.id)
    res.status(200).json(recipes)
  } catch (error) {
    res.status(500).json({ message: `Operation failed`, error })
  }
}

export default getRecipesByIngredient
