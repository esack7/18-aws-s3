'use strict';

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const User = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  findHash: { type: String, unique: true },
});

User.methods.generatePasswordHash = function(password) {
// Will create a hashed password so we don't store them in plain text

  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if(err) return reject(err);
      this.password = hash;
      resolve(this);
    });
  });
};

User.methods.comparePasswordHash = function(password) {
// This will take the users password and compare it with what's stored in DB
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, (err, valid) => {
      if(err) return reject(err);
      if(!valid) return reject(new Error('authorization failed, password did not match'));
      resolve(this);
    });
  });
};

User.methods.generateFindHash = function() {
// unique has to the user which will help us create a token for further auth'd requests
  return new Promise((resolve, reject) => {
    let tries = 0;

    let _generateFindHash = () => {
      this.findHash = crypto.randomBytes(32).toString('hex');
      this.save()
        .then( () => resolve(this.findHash))
        .catch(err => {
          if(tries > 3) return reject(new Error('authorization failed; could not validate findHash'));
          tries++;
          console.log(err);
          _generateFindHash();
        });
    };
    _generateFindHash();
  });
};

User.methods.generateToken = function() {
// this token will be provided to users after signup/signin so they can then make requests behind authentication

  return new Promise((resolve, reject) => {
    this.generateFindHash()
      .then(findhash => resolve(jwt.sign({ token: findhash }, process.env.APP_SECRET)))
      .catch(err => {
        reject(err);
      });
  });
};

module.exports = mongoose.model('user', User);
