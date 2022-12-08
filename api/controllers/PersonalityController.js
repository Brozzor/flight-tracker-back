/**
 * PersonalityControllerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: async function (req, res){
        try {
            await Personality.create(req.body)
        } catch (error) {
            return res.send(error);
        }
        return res.sendStatus(201);
    },

    get: async function (req, res){
        let personality;
        try {
            personality = await Personality.findOne(req.params.id)
        } catch (error) {
            return res.sendStatus(404);
        }
        return res.send(personality);
    },

    list: async function (req, res){
        let personality;
        try {
            personality = await Personality.find().skip(req.query.skip || 0).sort('createdAt DESC').limit(10)
        } catch (error) {
            return res.sendStatus(404);
        }
        return res.send(personality);
    },

    update: async function (req, res) {
        try {
            await Personality.updateOne(req.params.id).set(req.body)
        } catch (error) {
            return res.send(error);
        }
        return res.sendStatus(200);
    },

    delete: async function (req, res) {
        try {
            await Personality.destroyOne(req.params.id)
        } catch (error) {
            return res.send(error);
        }
        return res.sendStatus(200);
    }

};

