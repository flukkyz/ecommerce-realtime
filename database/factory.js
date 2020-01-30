'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })

Factory.blueprint('App/Models/User', (faker) => {
  let name = faker.first()
  return {
    firstname: name,
    lastname: faker.last(),

    displayname: name,
    email: faker.email({
      domain: 'gmail.com'
    }),
    password: '123456'
  }
})

Factory.blueprint('App/Models/Category', (faker) => {
  return {
    title: faker.country({
        full: true
    }),
    description: faker.sentence(),
  }
})

Factory.blueprint('App/Models/Product', (faker) => {
  return {
    name: faker.animal(),
    description: faker.sentence(),
    price: faker.floating({
        min: 0,
        max: 1000,
        fixed: 2
    })
  }
})
