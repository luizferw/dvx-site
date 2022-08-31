const Server = require('../server')
const request = require('supertest')

jest.setTimeout(5000)

describe('Ads', () => {
  const server = new Server()

  beforeAll(async () => {
    await server.bootstrap()
    server.listen()
  })

  afterAll(async () => {
    await server.close()
  })

  it('should GET ADS API root', async () => {
    const res = await request(server.app).get('/api/ads')

    expect(res.status).toEqual(200)
  })

  it('should GET AD by category', async () => {
    const data = await request(server.app).get('/api/ads')
    const ads = data.body
    const query = ads[0].category

    const res = await request(server.app).get(`/api/ads/category/${query}`)

    expect(res.status).toEqual(200)
  })

  it('should MAKE A SEARCH by search bar', async () => {
    const query = 'search'
    const res = await request(server.app).get(`/api/ads/category/${query}`)

    expect(res.status).toEqual(200)
  })

  it('should GET AD by ID', async () => {
    const data = await request(server.app).get('/api/ads')
    const ads = data.body
    const adId = ads[0]._id

    const res = await request(server.app).get(`/api/ads/${adId}`)

    expect(res.status).toEqual(200)
  })

  it('should DELETE an AD by ID', async () => {
    const data = await request(server.app).get('/api/ads')
    const ads = data.body
    const adId = ads[0]._id

    const res = await request(server.app).delete(`/api/ads/delete/${adId}`)

    expect(res.status).toEqual(200)
  })

  it('should ADD a new AD', async () => {
    const newAd = {
      title: 'title',
      description: 'description',
      hidePhone: true,
      price: '1234',
      image: 'image',
      address: {
        street: 'street',
        city: 'city',
        state: 'state',
        zip: 'zip'
      },
      category: 'category',
      sub_category: 'sub_category',
      author: 'author'
    }

    const res = await request(server.app).post('/api/ads/announce').send(newAd)

    expect(res.status).toEqual(201)
  })
})
