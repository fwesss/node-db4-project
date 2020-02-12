import { Request, Response, NextFunction } from 'express'
import { findRecipeById } from '../recipes.model'

const validateRecipeId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const recipe = await findRecipeById(req.params.id)
    if (recipe) {
      next()
    } else {
      res.status(404).json({ message: 'Invalid recipe ID' })
    }
  } catch (error) {
    res.status(500).json({ message: `Operation failed`, error })
  }
}

export default validateRecipeId
