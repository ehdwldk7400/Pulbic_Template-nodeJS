const monggose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = monggose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        uniqu: 1
    },
    password: {
        type: String,
        minglength: 5
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
userSchema.pre('save', function (next) {

    let user = this;
    // 비밀번호 암호화
    if (user.isModified('password')) {
        bcrypt.genSalt(saltRounds, function (err, salt) {

            if (err) return next(err)

            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err)
                user.password = hash
                next()
            })
        })
    } else {
        next()
    }

})

const User = monggose.model('User', userSchema)

module.exports = { User }