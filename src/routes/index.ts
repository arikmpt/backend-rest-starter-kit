import express from 'express'
import { register, login, getProfile } from '../controllers/user'
import checkToken from '../middleware/checkToken'
import { validate } from '../middleware/validate'

import { registerValidationRules } from '../validators'

const router = express.Router()

router.post('/auth/register', validate(registerValidationRules), register)
router.post('/auth/login', login)
router.get('/auth/profile', checkToken, getProfile)

export default router
