import request from 'supertest'
import { createServer } from '../config/createServer'
import { Application } from 'express'

let server: Application

beforeAll(async () => {
  server = await createServer()
})

describe('Test Health Check Endpoint', () => {
  it('Request /check-health should return 200!', async () => {
    const result = await request(server).get('/api/check-health').send()

    expect(result.status).toBe(200)
  })
})