module.exports = {
    test: {
        username: "root",
        password: null,
        database: "cars_test",
        host: "127.0.0.1",
        dialect: "sqlite",
        storage: "data.sqlite_development"
    },
    development: {
        username: "root",
        password: null,
        database: "cars_test",
        host: "127.0.0.1",
        dialect: "sqlite",
        storage: "data.sqlite_development"
    },
    production: {
        username: null,
        password: null,
        database: "cars",
        host: null,
        dialect: "sqlite",
        storage: "data.sqlite_prod"
    }
}