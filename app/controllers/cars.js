/**
 * Cars Controller
*/

const Models = require('../models');
const common = require('../../common');
const carService = require('../services/cars');
const list = async (req, res) => {
    const params = req.query;
    params.user = req.user; // Only list the car for authenticated user
    const cars = await carService.list(params);

    return res.status(200).json(cars);
};

const upsert = async (req, res) => {
    console.log('yes we are dffafasfasdfasdf')
    try {
            const params = req.body;
            params.user = req.user;
            const result = await carService.upsert(params);

            return res.status(204).json(result);
    } catch(error) {
        return res.status(400).send(common.error_bag(error));
    }
};

module.exports = {
    list,
    upsert,
}