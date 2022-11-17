/**
 * Plane.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    registration: {
      type: "string",
      required: true
    },

    price: {
      type: "number",
      required: true
    },

    model: {
      type: "string",
      required: true
    },

    icao: {
      type: "string",
      required: true
    },

    personality_id: {
      model: "personality"
    },

  },

};

