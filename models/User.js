const monggose = require('mongoose');

const userSchema = monggose.Schema({
    nam: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        uniqu: 1
    },
    lastnmae: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

const User = monggose.model('User', userSchema)

module.exports = { User }