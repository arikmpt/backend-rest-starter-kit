import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import router from '../routes'

const createServer = async (): Promise<Application> => {
  const app = express()

  app.use(express.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(cors())

  app.use('/api', router)
  app.get('/api/check-health', (req: Request, res: Response) => {
    res.status(200).send('Application Up')
  })

  // handle 404
  app.get('*', (req: Request, res: Response) => {
    res.status(404).send('Opps! not found...')
  })

  return app
}

export { createServer }
