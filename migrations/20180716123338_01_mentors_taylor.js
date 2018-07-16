exports.up = function(knex, Promise) {
    return knex.schema.createTable('mentors', (table) =>{
    table.increments('id')
    table.text('name')
    table.text('age')
    table.text('identity')
    table.text('gender')
    table.text('Im')
    table.text('description')
    table.text('image')
    })
  };

  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('mentors');
  };