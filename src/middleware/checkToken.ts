import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'
import { responseError } from '../utils/jsonResponse'
import { JWT_KEY } from '../utils/jwtKey'

const checkToken = (req: Request, res: Response, next: NextFunction) => {
  let token = <string>req.headers.authorization

  if (!token) {
    return res.status(403).json(responseError(403, 'please provide a token'))
  }

  // if provided with Bearer then remove it
  if (token.toLowerCase().startsWith('bearer')) {
    token = token.slice('bearer'.length).trim()
  }

  try {
    const jwtPayload = <any>jwt.verify(token, JWT_KEY)

    if (!jwtPayload) { return res.status(403).json(responseError(403, 'unauthenticated')) }

    res.locals.user = jwtPayload

    next()
  } catch (error) {
    return res.status(403).json(responseError(403, 'failed to authenticated'))
  }
}

export default checkToken
