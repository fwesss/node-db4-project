import { Request, Response } from 'express'
import { QueryBuilder } from 'knex'

type Id = number | string

type Model = {
  findAll: () => QueryBuilder
  findById: (id: Id) => QueryBuilder
  insert: (item: {
    [key: string]: number | string | boolean
  }) => Promise<QueryBuilder>
  update: (
    id: Id,
    item: { [key: string]: number | string | boolean }
  ) => Promise<QueryBuilder | null>
  remove: (id: Id) => QueryBuilder
}

export const getMany = (model: Model) => async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const items = await model.findAll()
    res.status(200).json(items)
  } catch (error) {
    res.status(500).json({ message: `Operation failed`, error })
  }
}

export const getOne = (model: Model) => async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const item = await model.findById(req.params.id)
    res.status(200).json(item)
  } catch (error) {
    res.status(500).json({ message: `Operation failed`, error })
  }
}

export const createOne = (model: Model) => async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const item = await model.insert(req.body)
    res.status(201).json(item)
  } catch (error) {
    res.status(500).json({ message: `Operation failed`, error })
  }
}

export const updateOne = (model: Model) => async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updated = await model.update(req.params.id, req.body)
    res.status(200).json(updated)
  } catch (error) {
    res.status(500).json({ message: `Operation failed`, error })
  }
}

export const removeOne = (model: Model) => async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await model.remove(req.params.id)
    res.status(200).json({ message: `This item has been deleted` })
  } catch (error) {
    res.status(500).json({ message: `Operation failed`, error })
  }
}

type Controllers = {
  getMany: (req: Request, res: Response) => Promise<void>
  getOne: (req: Request, res: Response) => Promise<void>
  createOne: (req: Request, res: Response) => Promise<void>
  updateOne: (req: Request, res: Response) => Promise<void>
  removeOne: (req: Request, res: Response) => Promise<void>
}

export const crudControllers = (model: Model): Controllers => ({
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model),
  updateOne: updateOne(model),
  removeOne: removeOne(model),
})
