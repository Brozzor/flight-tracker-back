/**
 * Personality.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

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

    profil_image: {
      type: "string",
      required: true,
    }

  },

};

