exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (table) =>{
    table.increments('id');
    table.text('image').notNullable().unique();
    table.text('username').notNullable().unique();
    table.text('email').notNullable().unique();
    table.text('password').notNullable().unique();
    table.integer('mentorsID').references('mentors.id').onDelete('cascade')
    })
  };
  
  // express knex 4 lyfe
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
  };