const { cars: carModel} = require('../models');
const common = require('../../common');
const upsert = async (params) => {
    try {
        const car = {
            user_id: params.user.id,
            year: params.year,
            make: params.make,
            model: params.model,
            reg_no: params.reg_no,
            mileage: params.mileage,
            location: params.location,
            title: `${params.year} ${params.make} ${params.model}`,
            price_type: params.price_type, // FIXME: This can be ENUM (list of price types)
            price: params.price,
            doors: params.doors,
            passengers: params.passengers,
            transmission: params.transmission,
            fuel_type: params.fuel_type,
            class: params.class,
            status: 'ACTIVE',
            additional_info: params.additional_info
        };

        const result = await carModel.create(car);

        return result;
    } catch (error) {
        console.error(`Unable to create car`, error);
        throw error;
    }
};

const list = async (params) => {
    return await carModel.findAll({
        where: {
            user_id: params.user.id,
        }
    })
};

module.exports = {
    upsert,
    list,
}