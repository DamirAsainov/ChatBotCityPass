const { Schema, model} = require('mongoose');

const User = new Schema({
    username: {type: String, require: true},
    email: {type: String, unique: true},
    password: {type: String, require: true},
    chatID: {type: String},
    // roles: [{type: String, ref: 'Role'}]
})

module.exports = model('User', User)