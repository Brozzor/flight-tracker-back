/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const crypto = require('crypto');

module.exports = {

  attributes: {
    firstname: {
      type: "string",
      required: true,
      minLength: 3,
      maxLength: 30
    },

    lastname: {
      type: "string",
      required: true,
      minLength: 3,
      maxLength: 30
    },

    email: {
      type: "string",
      required: true,
      isEmail: true,
      unique: true,
    },

    password: {
      type: "string"
    },

    status: {
        type: "string",
        isIn: ['USER', 'ADMINISTRATOR', 'BANNED'],
        defaultsTo: "USER",
    }
  
  },

  comparePassword: function (password, userPassword) {
    let hash = crypto.createHash('sha256').update(password).digest('base64');
    if (hash === userPassword) {
      return true
    }
    return false
  },

  beforeCreate: function (user, cb) {
    user.password = crypto.createHash('sha256').update(user.password).digest('base64');
    cb();
  },

};

