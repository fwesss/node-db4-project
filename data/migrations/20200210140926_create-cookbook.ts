import Knex, { SchemaBuilder } from 'knex'

export const up = (knex: Knex): SchemaBuilder =>
  knex.schema
    .createTable('recipes', table => {
      table.increments()
      table.string('name').notNullable()
      table.text('instructions').notNullable()
    })
    .createTable('ingredients', table => {
      table.increments()
      table.string('name').notNullable()
      table.float('quantity').notNullable()
    })
    .createTable('recipe_ingredients', table => {
      table
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipes.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredients.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })

export const down = (knex: Knex): SchemaBuilder =>
  knex.schema
    .dropSchemaIfExists('recipe_ingredients')
    .dropSchemaIfExists('ingredients')
    .dropSchemaIfExists('recipes')
