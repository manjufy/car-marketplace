# Car Marketplace

## How to Start

    Install `npm install -g nodemon` to be able to run the app without restarting.

Navigate to the project root directory

    npm install
    npm run dev // Note: on each run, script clean up the database and re-populates the tables with clean state. Please refer to package.json -> scripts

    Navigate to http://localhost:3000

## Migrations

    - To Create new migration run `node_modules/.bin/sequelize-cli migration:generate --name <entity>`. 

            node_modules/.bin/sequelize-cli migration:generate --name users // TO create new migration
            node_modules/.bin/sequelize-cli db:migrate // To apply the migrations


## End-to-end tests

    End-to-end tests covers all the scenarios

    How to run?

    Navigate to the project root directory
    $car-marketplace > npm test


## Postman collections

    Postman collection is in the project root directory with the filename `Car Marketplace.postman_collection.json`

    Steps to Import:
    - Navigate to Postman
    - Look for **Import** button on the top right
    - Browse the postman collection and import it
    - Edit the collection, in the Variables section, set a Variable called `bearerToken` and fill in Initial and current values. To do so, 
        - You would have to register an account with API [POST /api/auth/registration] - first postman collection endpoint
        - Then with the username and password, LOGIN [POST /api/auth/login] - This endpoint would generate a bearer token
        - Copy the token and fill in the initial and current values in the Variables section