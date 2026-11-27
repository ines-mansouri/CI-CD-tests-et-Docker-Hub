const request = require('supertest')
const app = require('../../src/app')

describe("API Express - tests d'intégration", () => {
  test('GET / renvoie 200 et "Hello GitHub Actions!"', async () => {
    const res = await request(app).get('/')

    expect(res.statusCode).toBe(200)
    expect(res.text).toBe('Hello GitHub Actions!')
  })

  test('GET /hello/:name salue la personne', async () => {
    const res = await request(app).get('/hello/Docker')

    expect(res.statusCode).toBe(200)
    expect(res.text).toBe('Hello Docker!')
  })

  test('GET /health renvoie le statut ok', async () => {
    const res = await request(app).get('/health')

    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({ status: 'ok' })
  })

  test('une route inconnue renvoie 404', async () => {
    const res = await request(app).get('/inconnue')

    expect(res.statusCode).toBe(404)
  })
})
