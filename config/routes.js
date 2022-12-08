/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  'post /api/v1/auth/login': 'AuthController.login',

  'post /api/v1/user': 'UserController.create',
  'get /api/v1/user/me': 'UserController.me',

  'post /api/v1/plane': 'PlaneController.create',
  'put /api/v1/plane/:id': 'PlaneController.update',
  'delete /api/v1/plane/:id': 'PlaneController.delete',
  'get /api/v1/plane/:id': 'PlaneController.get',
  'get /api/v1/plane': 'PlaneController.list',

  'post /api/v1/personality': 'PersonalityController.create',
  'put /api/v1/personality/:id': 'PersonalityController.update',
  'delete /api/v1/personality/:id': 'PersonalityController.delete',
  'get /api/v1/personality/:id': 'PersonalityController.get',
  'get /api/v1/personality': 'PersonalityController.list',

  'post /api/v1/flight': 'FlightController.create',
  'put /api/v1/flight/:id': 'FlightController.update',
  'delete /api/v1/flight/:id': 'FlightController.delete',
  'get /api/v1/flight/:id': 'FlightController.get',
  'get /api/v1/flight': 'FlightController.list',

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
