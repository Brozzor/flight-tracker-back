/**
 * PlaneControllerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: async function (req, res){
        try {
            await Plane.create(req.body)
        } catch (error) {
            return res.send(error);
        }
        return res.sendStatus(201);
    },

    get: async function (req, res){
        let plane;
        try {
            plane = await Plane.findOne(req.params.id)
        } catch (error) {
            return res.sendStatus(404);
        }
        return res.send(plane);
    },

    list: async function (req, res){
        let plane;
        try {
            plane = await Plane.find().skip(req.query.skip || 0).sort('createdAt DESC').limit(10)
        } catch (error) {
            return res.sendStatus(404);
        }
        return res.send(plane);
    },

    update: async function (req, res) {
        try {
            await Plane.updateOne(req.params.id).set(req.body)
        } catch (error) {
            return res.send(error);
        }
        return res.sendStatus(200);
    },

    delete: async function (req, res) {
        try {
            await Plane.destroyOne(req.params.id)
        } catch (error) {
            return res.send(error);
        }
        return res.sendStatus(200);
    }
};

