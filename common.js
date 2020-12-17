const error_bag = (errors) => {
    const errorBag = [];
    for (const error of errors.errors) {
        errorBag.push({
            field: error.path,
            message: error.message
        })
    }

    return errorBag;
};

module.exports = {
    error_bag,
}