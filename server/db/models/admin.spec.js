/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Admin = db.model('admin')

describe('Admin model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let fizal

      beforeEach(async () => {
        fizal = await Admin.create({
          name: 'Fizal',
          password: 'qwerty123'
        })
      })

      it('returns true if the password is correct', () => {
        expect(fizal.correctPassword('qwerty123')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(fizal.correctPassword('bonez')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('Admin model')
