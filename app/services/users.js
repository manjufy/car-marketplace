const { users: userModel} = require('../models');
const find = async (email, attributes = null) => {
    const options = {
        where: {
            email: email,
        }
    };

    // optional attributes
    if (attributes) {
        options.attributes = attributes
    };

    const user = await userModel.findOne({
        where: {
            email: email
        },
        attributes,
    });

    return user;
};

module.exports = {
    find,
};