/**
 * Car Availability Controller
 */
/**
 * Cars Controller
*/

const common = require('../../common');
const availabilityService = require('../services/availabilities');
const list = async (req, res) => {
    const params = req.query;
    params.car_id = req.params.car_id;
    params.user = req.user; // Only list the car for authenticated user
    const availability = await availabilityService.list(params);

    return res.status(200).json(availability);
};

const upsert = async (req, res) => {
    
    try {
        const params = req.body;
        params.car_id = req.params.car_id;
        params.user = req.user;

        if (req.method === 'PATCH') {
            params.__patch = true;
            params.id = req.params.id;
        }

        const result = await availabilityService.upsert(params);

        return res.status(204).json(result);
    } catch(error) {
        return res.status(400).send(common.error_bag(error));
    }
};

const get = async (req, res) => {
    try {
        const params = req.query;
        params.id = req.params.id;
        params.car_id = req.params.car_id;
        params.user = req.user;
        const result = await availabilityService.get(params);

        if (result === null)
            return res.status(404).send('Not Found');

            return res.status(200).json(result);
    } catch(error) {
        return res.status(400).send(common.error_bag(error));
    }
};

module.exports = {
    upsert,
    list,
    get,
}