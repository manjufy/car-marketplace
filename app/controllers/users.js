/**
 * Users Controller
*/

const Models = require('../models');
const list = async (req, res) => {
    const users = await Models.users.findAll({
        attributes: {
            exclude: ['password']
        }
    });

    return res.status(200).json(users);
};

module.exports = {
    list,
}