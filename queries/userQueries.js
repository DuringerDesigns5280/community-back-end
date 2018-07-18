const database = require("../database-connection");

module.exports = {
    list(){
        return database('users').select()
    },
    read(id){
        return database('users').select().where('id', id).first()
    },
    create(users){
        return database('users')
            .insert(users)
            .returning('*')
            .then(record => record[0])
    },
    update(id, users){
        return database('users')
            .update(users)
            .where('id', id)
            .returning('*')
            .then(record => record[0])
    },
    delete(id){
        return database('users').delete().where('id', id)
    }
}

