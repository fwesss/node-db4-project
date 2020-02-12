import { Request, Response, NextFunction } from 'express'
import { findIngredientById } from '../ingredients.model'

const validateIngredientId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const recipe = await findIngredientById(req.params.id)
    if (recipe) {
      next()
    } else {
      res.status(404).json({ message: 'Invalid ingredient ID' })
    }
  } catch (error) {
    res.status(500).json({ message: `Operation failed`, error })
  }
}

export default validateIngredientId
