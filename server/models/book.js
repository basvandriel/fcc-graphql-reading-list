const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    genre: String,
    author: String
});

module.exports = mongoose.model('Book', schema);