'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('firstname')
      table.string('lastname')
      table.string('displayname')
      table.string('email', 190).notNullable().unique()
      table.string('password', 60).notNullable()
      table.integer('image_id').unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
