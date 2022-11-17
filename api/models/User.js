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
    },

    lastname: {
      type: "string",
      required: true,
      minLength: 3,
    },

    email: {
      type: "string",
      required: true,
      isEmail: true,
      unique: true,
    },

    password: {
      type: "string",
      allowNull: true,
    },

    status: {
        type: "string",
        isIn: ['USER', 'ADMINISTRATOR'],
        defaultsTo: "USER",
    },
  
  },

  comparePassword: function (password, user, cb) {
    let hash = crypto.createHash('sha256').update(password).digest('base64');
    if (hash === user.password) {
      cb(null, true);
    } else {
      cb(new Error("Password didn't match"));
    }
  },

  beforeCreate: function (user, cb) {
    user.password = crypto.createHash('sha256').update(user.password).digest('base64');
    cb();
  },

};

