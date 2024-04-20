const { Schema, model} = require('mongoose');

const Message = new Schema({
    chatID: {type: String, require: true},
    text:{type: String,require: true},
    userID:{type: String, ref: 'User'}
})

module.exports = model('Message', Message)