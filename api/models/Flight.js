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
      allowNull: true
    },

    plane_id: {
      model: "plane"
    },

    from: {
      type: "string",
      allowNull: true
    },

    to: {
      type: "string",
      allowNull: true
    },

    firstSeen: {
      type: "number",
      allowNull: true

    },

    lastSeen: {
      type: "number",
      allowNull: true
    }

  },

};

