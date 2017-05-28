import Sequalize from 'sequelize';
import _ from 'lodash';

// TODO consider deletion

const dbOptions =  {
    dialect: 'postgres',
    define: {
        schema: "public",
    },
};

let db;
if (process.env.DATABASE_URL) {
    // the application is executed on Heroku ... use the postgres database
    db = new Sequalize(process.env.DATABASE_URL, dbOptions);
} else {
    // the application is executed on the local machine
    db = new Sequalize("example", "postgres", 'admin', {
        host: 'localhost',
        port: '5432',
        ...dbOptions,
    });
}

export { db };