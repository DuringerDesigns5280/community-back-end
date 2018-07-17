const database = require("../database-connection");

module.exports = {
    list(){
        return database('users').select()
    },
    read(id){
        return database('users').select().where('id', id).first()
    },
    create(mentor){
        return database('users')
            .insert(mentor)
            .returning('*')
            .then(record => record[0])
    },
    update(id, mentor){
        return database('users')
            .update(mentor)
            .where('id', id)
            .returning('*')
            .then(record => record[0])
    },
    delete(id){
        return database('users').delete().where('id', id)
    }
}