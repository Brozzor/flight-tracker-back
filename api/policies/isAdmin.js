module.exports = async function (req, res, next) {
    // on verifie que l'utilisateur a un status d'admin
    if (req.user.status == "ADMINISTRATOR") {
        return next();
    }else{
        return res.sendStatus(403) // sinon on retourne un refus au client
    }
};