'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AssetsSchema extends Schema {
  up () {
    this.create('assets', (table) => {
      table.increments()
      table.timestamps()
      table.string('item')
      table.string('original_value')
      table.string('value')
      table.string('location')
      table.string('quantity')
      table.string('description')
    })
  }

  down () {
    this.drop('assets')
  }
}

module.exports = AssetsSchema
