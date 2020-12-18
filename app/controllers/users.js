/**
 * Users Controller
*/
const userService = require('../services/users');
const me = async (req, res) => {
    const user = req.user;
    const result = await userService.find(user.email,  {
        exclude: ['password']
    });

    return res.status(200).json(result);
};

module.exports = {
    me,
}