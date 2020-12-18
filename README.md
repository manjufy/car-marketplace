# Car Marketplace

## How to Start

    Install `npm install -g nodemon` to be able to run the app without restarting.

Navigate to the project root directory

    npm install
    npm run dev // Note: on each run, script clean up the database and re-populates the tables with clean state. Please refer to package.json -> scripts

    Navigate to http://localhost:3000

## Migrations

    - To Create new migration run `node_modules/.bin/sequelize-cli migration:generate --name <entity>`. 
        ```
            node_modules/.bin/sequelize-cli migration:generate --name users // TO create new migration
            node_modules/.bin/sequelize-cli db:migrate // To apply the migrations
        ```

## End-to-end tests

    End-to-end tests covers all the scenarios

    How to run?

    ```
    Navigate to the project root directory
    $car-marketplace > npm test
    ```