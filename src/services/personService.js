'use strict';
var Person = require('../config/db');


module.exports = new class PersonRepository {

    getAll() {
        return Person.find();
    }

    getById(id) {
        return Person.findById(id);
    }

    create(person) {       
        return Person.create(person);
    }

    delete(id) {
        return Person.findByIdAndRemove(id);
    }
}

