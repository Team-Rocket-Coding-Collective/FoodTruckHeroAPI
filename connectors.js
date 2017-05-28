import Sequalize from 'sequelize';
import _ from 'lodash';

const dbOptions =  {
    dialect: 'postgres',
    protocol: 'postgres',
    define: {
        schema: "public",
        freezeTableName: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
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

const UserModel = db.define('user', {
    id: { type: Sequalize.INTEGER, primaryKey: true },
    name: { type: Sequalize.INTEGER },
    email: { type: Sequalize.STRING },
});

const FoodTruckModel = db.define('foodtruck', {
    owner_id: { type: Sequalize.INTEGER },
    name: { type: Sequalize.INTEGER },
    latitude: { type: Sequalize.FLOAT },
    longitude: { type: Sequalize.FLOAT },
});

UserModel.hasMany(FoodTruckModel);
FoodTruckModel.belongsTo(UserModel);

const User = db.models.user;
const FoodTruck = db.models.foodtruck;

export { User, FoodTruck };