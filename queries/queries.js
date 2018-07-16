const database = require("../database-connection");


module.exports = {
    list(){
        return database('mentors').select()
    },
    read(id){
        return database('mentors').select().where('id', id).first()
    },
    create(resolution){
        return database('mentors')
            .insert(resolution)
            .returning('*')
            .then(record => record[0])
    },
    update(id, resolution){
        return database('mentors')
            .update(resolution)
            .where('id', id)
            .returning('*')
            .then(record => record[0])
    },
    delete(id){
        return database('mentors').delete().where('id', id)
    }
}