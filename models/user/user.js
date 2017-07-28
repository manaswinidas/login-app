const mongoose = require('mongoose');

// Define schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    name : String,
    username: String,
    password: String
});

// Compile model from schema
var SomeModel = mongoose.model('User', SomeModelSchema );
module.exports = SomeModel;
