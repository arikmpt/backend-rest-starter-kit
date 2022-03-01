import { Request, Response } from 'express'
import UserModel from '../models/User'
import { genSalt, hash, compareSync } from 'bcrypt'
import { responseError, responseSuccess } from '../utils/jsonResponse'
import { isDuplicateErrorOnFields } from '../utils/common'
import * as jwt from 'jsonwebtoken'
import { JWT_KEY } from '../utils/jwtKey'

const cryptPassword = async (password: string) => {
  const salt = await genSalt(10)

  return hash(password, salt)
}

export const register = async (req: Request, res: Response) => {
  try {
    const doc = new UserModel({ ...req.body, password: await cryptPassword(req.body.confirmPassword) })

    await doc.save()

    return res.status(200).json(responseSuccess(200, doc, 'saved successfully'))
  } catch (error: any) {
    if (isDuplicateErrorOnFields(error, 'username', 'email')) {
      return res.status(500).json(responseError(409, 'email or username already exists'))
    }
    return res.status(500).json(responseError(500, 'Fatal Error!'))
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findOne({ $or: [{ username: req.body.username }, { email: req.body.email }] })
    if (!user) { return res.status(500).json(responseError(500, 'Invalid username or email')) }

    if (compareSync(req.body.password, user.password)) {
      const token = jwt.sign(
        { id: user._id, username: user.username },
        JWT_KEY,
        { expiresIn: '1h' }
      )

      return res.status(200).json(responseSuccess(200, { token }, 'login successfully'))
    }

    return res.status(500).json(responseError(500, 'Invalid credentials'))
  } catch (error) {
    return res.status(500).json(responseError(500, 'Fatal Error!'))
  }
}

export const getProfile = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findOne({ _id: res.locals.user.id })
    if (!user) { return res.status(500).json(responseError(404, 'User data not found')) }

    return res.status(200).json(responseSuccess(200, user, 'get successfully'))
  } catch (error) {
    return res.status(500).json(responseError(500, 'Fatal Error!'))
  }
}
