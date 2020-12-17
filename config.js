module.exports = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    development: {
        db: {
          dialect: "sqlite",
          storage: ":memory:"
        }
      },
    production: {
        // prod settings....
    }
}