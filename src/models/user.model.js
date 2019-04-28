
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

/* eslint-disable consistent-return */
/* eslint-disable func-names */
userSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  bcrypt.hash(this.password, 10).then((hash) => {
    this.password = hash;
    next();
  })
    .catch(err => next(err));
});

userSchema.methods.comparePassword = function (pw) {
  bcrypt
    .compare(pw, this.password,
      (err, isMatch) => (err ? Promise.reject(err) : Promise.resolve(isMatch)));
};

const User = mongoose.model('User', userSchema);

module.exports = User;
