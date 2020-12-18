/**
 * App Index Page http://localhost:3000/
*/
const get = (req, res) => {
    res.send('welcome to api')
};

module.exports = {
    get,
}