var mongoose = require('mongoose');
const PersonSchema = require('./schema');

//conexão com o compose
//mongoose.connect('mongodb://link-db/db_employees');

//conexão localhost
mongoose.connect('mongodb://localhost:27017/db_employees');


var Person = mongoose.model('Person', PersonSchema);
module.exports = Person;