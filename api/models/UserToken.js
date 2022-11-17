var randomstring = require("randomstring");
module.exports = {
  attributes: {
    token: {
      type: "string",
      unique: true,
    },
    user: {
        model: "user",
    },
    expiredAt: {
      type: "number",
    },
  },

  beforeCreate: function (user, cb) {
    user.expiredAt = new Date().getTime() + 1000 * 60 * 60 * 24 * 30;
    user.token = randomstring.generate(200);
    cb();
  },
};