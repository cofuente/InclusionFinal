/* global describe beforeEach it */

// const {expect} = require('chai')
// const request = require('supertest')
const db = require('../../db')
// const app = require('../../index')
// const Applicant = db.model('applicant')

describe('Applicant routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  // describe('/api/applicants/', () => {
  //   const applicantTest =

  //   beforeEach(() => {
  //     return Applicant.create({
  //       name: applicantTest
  //     })
  //   })

  //   it('GET /api/applicants', async () => {
  //     const res = await request(app)
  //       .get('/api/applicants')
  //       .expect(200)

  //     expect(res.body).to.be.an('array')
  //     expect(res.body[0].email).to.be.equal(applicantTest)
  //   })
  // }) // end describe('/api/applicants')
}) // end describe('Applicant routes')
