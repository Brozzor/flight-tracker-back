/**
 * Airport.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

 module.exports = {

    attributes: {
  
      iata: {
        type: "string",
        allowNull: true
      },
  
      icao: {
        type: "string",
      },
  
      name: {
        type: "string",
        allowNull: true
      },

      longitude: {
        type: "number",
        allowNull: true
      },

      latitude: {
        type: "number",
        allowNull: true
      },
  
      region: {
        type: "string",
        allowNull: true
      },
  
      country: {
        type: "string",
        allowNull: true
      }
  
    },
  
  };
  
  