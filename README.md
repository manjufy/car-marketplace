# Car Marketplace

## How to Start

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