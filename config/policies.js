/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  '*': "isAuth",

  "UserController" : {
    "create": true
  },

  "AuthController" : {
    "login": true
  },

  "PlaneController" : {
    "create": ["isAuth","isAdmin"],
    "update": ["isAuth","isAdmin"],
    "delete": ["isAuth","isAdmin"],
  },

  "PersonalityController" : {
    "create": ["isAuth","isAdmin"],
    "update": ["isAuth","isAdmin"],
    "delete": ["isAuth","isAdmin"],
  },

  "FlightController" : {
    "create": ["isAuth","isAdmin"],
    "update": ["isAuth","isAdmin"],
    "delete": ["isAuth","isAdmin"],
    "refreshFlights": "isAuth"
  },

};
