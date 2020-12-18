/**
 * Users Controller
*/
const { users: userModel} = require('../models');
const get = async (req, res) => {
    // FIXME: Just get the logged in user
    const users = await userModel.findAll({
        attributes: {
            exclude: ['password']
        }
    });

    return res.status(200).json(users);
};

module.exports = {
    get,
}