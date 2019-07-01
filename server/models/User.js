const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { Schema } = mongoose;
//mongoose needs to know the schema in advance

//can easily/freely add properties
const userSchema = new Schema({
	googleId: String
});

mongoose.model('users', userSchema); //if already exists doesn't recreate