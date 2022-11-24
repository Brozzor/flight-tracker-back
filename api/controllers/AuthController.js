/**
 * AuthControllerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const jwt = require('jsonwebtoken');

module.exports = {

    login : async function(req, res){
        const user = await User.findOne({ email: req.body.email });
        
        if (!user) return res.sendStatus(401);

        // Comparaison du mot de passe envoyer par l'utilisateur et le mot de passe crypter en base de donnée
        const isGoodPassword = await User.comparePassword(req.body.password, user.password);
        console.log(isGoodPassword)

        if (!isGoodPassword) return res.sendStatus(401);

        // creation du token d'authentification et retour au client pour qu'il puisse maintenir une connection a la partie authentifié de l'api
        return res.send(jwt.sign({ id: user.id }, process.env.JWT_SECRET));
    }

};

