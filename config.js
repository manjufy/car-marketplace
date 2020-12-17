const database = require('./database');
module.exports = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    test: {
        db: database.test
    },
    development: {
        db: database.development
    },
    production: {
        db: database.production
    }
}