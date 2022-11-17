/**
 * Flight.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    duration: {
      type: "number",
      required: true
    },

    plane_id: {
      model: "plane"
    },

    from: {
      type: "string",
      required: true
    },

    to: {
      type: "string",
      required: true
    }

  },

};

