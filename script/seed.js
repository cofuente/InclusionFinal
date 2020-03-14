'use strict'

const db = require('../server/db')
const {
  Admin,
  Applicant,
  Application,
  Comment,
  Form
} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const admins = await Promise.all([
    Admin.create({name: 'Fizal', password: 'qwerty123'}),
    Admin.create({name: 'Saeed', password: '123'})
  ])
  console.log(`seeded ${admins.length} admins`)

  const forms = await Promise.all([
    Form.create({
      uniqueFormURL: 'fhkfhjdfhthisshouldbeauniquerandomizedstringsomehow',
      cohortId: 2102
    }),
    Form.create({
      uniqueFormURL: 'fhuerandomizedstringsomehow',
      textInput:
        'This will probably be the unique name field, or maybe an email field. If we decide to got with email we should make sure to update it in the model',
      textArea: 'Daaaaang this is the longest essay ever.',
      checkBox: true,
      date: '2020-10-01',
      cohortId: 2010
    }),
    Form.create({
      uniqueFormURL: 'fhkfhjdfhtomehow',
      textInput: "I'm more and more inclined to have this be an email field",
      textArea: 'Daaaaang this is the second longest essay ever.',
      checkBox: true,
      date: '2020-04-01',
      cohortId: 2010
    })
  ])
  console.log(`seeded ${forms.length} forms`)

  const applicants = await Promise.all([
    Applicant.create({
      formId: 1,
      name: 'Vanessa',
      email: 'vchan8084@gmail.com'
    }),
    Applicant.create({
      formId: 2,
      name: 'Chiara',
      email: 'contact@cofuente.io'
    })
  ])
  console.log(`seeded ${applicants.length} applicants`)

  const applications = await Promise.all([
    Application.create({
      applicantId: 1,
      status: 'UNDER_REVIEW'
    }),
    Application.create({
      applicantId: 2,
      status: 'UNDER_REVIEW'
    })
  ])
  console.log(`seeded ${applications.length} applications`)

  const comments = await Promise.all([
    Comment.create({
      applicationId: 1,
      adminId: 1,
      text: 'I like this face!'
    }),
    Comment.create({
      applicationId: 2,
      adminId: 1,
      text: 'I also like this face!'
    })
  ])
  console.log(`seeded ${comments.length} comments`)

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
