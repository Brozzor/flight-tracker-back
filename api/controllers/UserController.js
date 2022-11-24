/**
 * UserControllerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

      create : async function(req, res){
        try {
            await User.create(req.body);
        } catch (error) {
            return res.sendStatus(401);
        }
        
        return res.sendStatus(201);
      },

      me : async function(req, res){
        delete req.user.password
        return res.send(req.user);
      }

};

