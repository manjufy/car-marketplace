/**
 * Users Controller
*/
const { users: usersModel} = require('../models');
const Models = require('../models');
const common = require('../../common');
const list = async (req, res) => {
    const users = await usersModel.findAll({
        attributes: {
            exclude: ['password']
        }
    });

    return res.status(200).json(users);
};

const upsert = async (req, res) => {
    try {
        const { email, password, full_name, phone, address, city, state } = req.body;
        const user = await usersModel.create({
            email,
            password,
            full_name,
            phone,
            address,
            city,
            state,
            status: 'ACTIVE',
            active: true,
        });
    
        return res.status(204).json(user);
    } catch (error) {
        return res.status(400).send(common.error_bag(error));
    }
};

module.exports = {
    list,
    upsert,
}