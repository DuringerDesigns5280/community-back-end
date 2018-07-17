

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
     {
        id: 1,
        username: 'jeff',
        email: 'jeff@gmail.com',
        password: 'jeff01',
        image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a723711f2c79ac1dc3c8718d82850f30&auto=format&fit=crop&w=500&q=60'

      }, {
        id: 2,
        username: 'jess',
        email: 'jess@gmail.com',
        password: 'jess01',
        image: 'https://images.unsplash.com/photo-1476493279419-b785d41e38d8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4920987ab334960a4d39b9db70555ef5&auto=format&fit=crop&w=500&q=60'
      }
      ])
  })
  .then(() => {
    return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))")
})
}