import * as dotenv from 'dotenv'
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

export const JWT_KEY = process.env.JWT_KEY || 'secretkey'
