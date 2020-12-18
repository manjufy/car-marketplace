const { availabilities: availabilityModel} = require('../models');
const upsert = async (params) => {
    try {
        const car = {
            car_id: params.car_id,
            from_datetime: params.from_datetime,
            to_datetime: params.to_datetime,
            status: 'ACTIVE',
            additional_info: params.additional_info
        };

        const result = await availabilityModel.create(car);

        return result;
    } catch (error) {
        console.error(`Unable to create car`, error);
        throw error;
    }
};

const list = async (params) => {
    return await availabilityModel.findAll({
        where: {
            car_id: params.car_id,
        }
    })
};

const get = async (params) => {
    return await availabilityModel.findOne({
        where: {
            id: params.id,
            car_id: params.car_id,
        }
    })
};

module.exports = {
    upsert,
    list,
    get,
}