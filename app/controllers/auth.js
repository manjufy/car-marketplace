/**
 * Users Controller
*/
const { users: userModel} = require('../models');
const common = require('../../common');
const config = require('../../config');
const jwt = require('jwt-simple');

const login = async (req, res) => {
    const user = req.user;
    const token = jwt.encode({ user }, config.auth.secret);
    console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
    console.log(`req.user: ${JSON.stringify(req.user)}`)

    return res.status(200).json({
        token: token,
        message: "successfully logged in"
    });
};

const register = async (req, res) => {
    try {
        const { email, password, full_name, phone, address, city, state } = req.body;
        const user = await userModel.create({
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
    login,
    register,
}