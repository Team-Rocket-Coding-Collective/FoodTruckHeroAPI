// @Flow

import { User, FoodTruck } from '../sequelize/models/index';
import type { UserType, FoodTruckType } from '../types';

// TODO get connects from context instead

export const resolvers = {
    Query: {
        foodtrucks: (): FoodTruckType => {
            return FoodTruck.findAll({
                include: [
                    {model: User, as: 'owner'}
                ]
            });
        },
        users: (): UserType => {
            // TODO this should also return all the foodtrucks
            return User.findAll({
                include: [
                    {model: FoodTruck, as: 'foodtrucks'}
                ]
            }); 
        },
    },
    Mutation: {
        addUser: (root, args): UserType=> {
            return User.create(args);
        },
        addFoodTruck: (root, args): FoodTruckType => {
            const foodTruckPromise = FoodTruck.create(args);
            // TODO try to preload owner
            return foodTruckPromise.then((foodTruck) => foodTruck.getOwner().then(owner => {
                foodTruck.owner = owner;
                return foodTruck;
            }));
        },
    }
}

export default resolvers;