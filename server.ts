import express, {
  json,
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from 'express'
import morgan from 'morgan'

const server = express()

const jsonSyntaxErrorHandler = (
  error: ErrorRequestHandler,
  _req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (error instanceof SyntaxError) {
    res.status(400).json({ error: 'JSON syntax error' })
  } else {
    next()
  }
}

server.use(morgan('dev'))
server.use(json())
server.use(jsonSyntaxErrorHandler)

server.get('/', (_req, res) => res.send(`<h1>Node DB4 Project</h1>`))

export default server
