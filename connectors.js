import Sequalize from 'sequelize';
import _ from 'lodash';

// TODO specify schema public
// Don't worry about the credentials here. They will change later. Just using for local now.
const db = new Sequalize('example', 'postgres', 'admin', {
    dialect: 'postgres',
    host: 'localhost',
    port: '5432',
    define: {
        schema: "public",
        freezeTableName: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
});

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