const jwt = require('jsonwebtoken');

module.exports = async function (req, res, next) {
    // on verifie dans un premier temps que le header authorization existe
    if (req.headers.authorization) {

        let decoded
        try {
            // Nous mettons les informations du token dans la variable decoded, si le token est mauvais il soulevera une erreur et on renverra une 403
            decoded = jwt.verify(req.headers.authorization.split(' ')[1], process.env.JWT_SECRET); 
            // Si nous arrivons ici c'est que le token est bon, nous pouvons donc chercher les datas de l'utilisateur et les charger juste le temps de l'execution de cette requete (stateless)
            req.user = await User.findOne(decoded.id)
            // Si pour une raison inconnu l'utilisateur n'est pas trouver la fonction findOne va lever une erreur et on tombera dans le catch
        } catch (error) {
            console.error(error) // on garde une tracabilite de l'erreur lever
            return res.sendStatus(403) // on retourne un refus au client
        }
        
        return next();
    }else{
        return res.sendStatus(403) // on retourne un refus au client
    }
};