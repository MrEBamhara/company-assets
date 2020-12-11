'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AssertsSchema extends Schema {
  up () {
    this.create('assets', (table) => {
      table.increments()
      table.timestamps()
      table.string('name')
      table.string('type')
      table.string('value')
      table.string('original_value')
      table.string('quantity')
      table.string('description')
      table.string('date_of_purchase')
    })
  }

  down () {
    this.drop('asserts')
  }
}

module.exports = AssertsSchema
