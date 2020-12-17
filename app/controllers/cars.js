/**
 * Cars Controller
*/

const Models = require('../models');
const list = async (req, res) => {
    const cars = await Models.cars.findAll({});

    return res.status(200).json(cars);
};

module.exports = {
    list,
}