import { createServer } from './config/createServer'
import { AddressInfo } from 'net'
import http from 'http'
import * as dotenv from 'dotenv'
import mongoose, { ConnectOptions } from 'mongoose'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || '3000'
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
} as ConnectOptions

async function startServer () {
  const app = await createServer()
  const server = http.createServer(app).listen({ host, port }, async () => {
    const addressInfo = server.address() as AddressInfo

    await mongoose.connect(`${process.env.DB_CONNECTION}${process.env.DB_NAME}`, options)
    console.log('connected to database')
    console.log(
      `Server ready at http://${addressInfo.address}:${addressInfo.port}/api`
    )
  })
}

startServer()
