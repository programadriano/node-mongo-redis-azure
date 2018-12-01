var mongoose = require('mongoose');
mongoose.connect('mongodb://link-db/db_employees');
//mongoose.connect('mongodb://localhost:27017/db_employees');

var Schema = mongoose.Schema;

var PersonSchema = new Schema({
    name: String,
    mail: String,
    role: String
});


var Person = mongoose.model('Person', PersonSchema);
module.exports = Person;

