module.exports = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    test: {
        db: {
                username: "root",
                password: null,
                database: "cars",
                host: "127.0.0.1",
                dialect: "sqlite",
                storage: "data.sqlite_test"
        }
    },
    development: {
        db: {
                username: "root",
                password: null,
                database: "cars_test",
                host: "127.0.0.1",
                dialect: "sqlite",
                storage: "data.sqlite_development"
        }
    },
    production: {
        db: {
                username: null,
                password: null,
                database: "cars",
                host: null,
                dialect: "sqlite",
                storage: "data.sqlite_prod"
        }
    }
}