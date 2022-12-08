/**
 * FlightControllerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: async function (req, res){
        try {
            await Flight.create(req.body)
        } catch (error) {
            return res.send(error);
        }
        return res.sendStatus(201);
    },

    get: async function (req, res){
        let flight;
        try {
            flight = await Flight.findOne(req.params.id)
        } catch (error) {
            return res.sendStatus(404);
        }
        return res.send(flight);
    },

    list: async function (req, res){
        let flight;
        try {
            flight = await Flight.find().skip(req.query.skip || 0).sort('createdAt DESC').limit(10)
        } catch (error) {
            return res.sendStatus(404);
        }
        return res.send(flight);
    },

    update: async function (req, res) {
        try {
            await Flight.updateOne(req.params.id).set(req.body)
        } catch (error) {
            return res.send(error);
        }
        return res.sendStatus(200);
    },

    delete: async function (req, res) {
        try {
            await Flight.destroyOne(req.params.id)
        } catch (error) {
            return res.send(error);
        }
        return res.sendStatus(200);
    }
};

