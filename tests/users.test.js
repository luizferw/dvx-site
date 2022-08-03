const Server = require('../server')
const request = require('supertest')

jest.setTimeout(5000)

describe('Users', () => {
  const server = new Server()

  beforeAll(async () => {
    await server.bootstrap()
    server.listen()
  })

  afterAll(async () => {
    await server.close()
  })

  it('should GET USERS API root', async () => {
    const res = await request(server.app).get('/api/users')

    expect(res.status).toEqual(200)
  })

  it('should GET USER by ID', async () => {
    const data = await request(server.app).get('/api/users')
    const users = data.body
    const userId = users[0]._id

    const res = await request(server.app).get(`/api/users/${userId}`)

    expect(res.status).toEqual(200)
  })

  it('should GET USER by username', async () => {
    const data = await request(server.app).get('/api/users')
    const users = data.body
    const userName = users[0].username

    const res = await request(server.app).get(`/api/users/author/${userName}`)

    expect(res.status).toEqual(200)
  })

  it('should REGISTER a new user', async () => {
    const newUser = {
      username: 'username',
      email: 'email@email.com',
      password: '12345'
    }

    const res = await request(server.app)
      .post(`/api/users/register`)
      .send(newUser)

    expect(res.status).toEqual(201)
  })
})
