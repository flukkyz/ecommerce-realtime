'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserImageFkSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.foreign('image_id').reference('id').inTable('images').onDelete('cascade')
    })
  }

  down () {
    this.table('users', (table) => {
      table.dropForeign('image_id')
      table.dropColumn('image_id')
    })
  }
}

module.exports = UserImageFkSchema
