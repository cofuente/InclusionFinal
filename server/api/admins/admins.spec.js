/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../../db')
const app = require('../../index')
const Admin = db.model('admin')

describe('Admin routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/admins/', () => {
    const fizalTest = 'Fizal'

    beforeEach(() => {
      return Admin.create({
        name: fizalTest
      })
    })

    it('GET /api/admins', async () => {
      const res = await request(app)
        .get('/api/admins')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].email).to.be.equal(fizalTest)
    })
  }) // end describe('/api/admins')
}) // end describe('Admin routes')
