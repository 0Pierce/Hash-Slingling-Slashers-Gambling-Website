const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    registrationDate: {
        type: Date,
        default: Date.now
    },
    balance: {
        type: Number,
        default: 0
    }
});

const users = mongoose.model('users', userSchema);

module.exports = users;
