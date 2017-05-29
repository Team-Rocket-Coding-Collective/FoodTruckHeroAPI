import { User, FoodTruck } from '../models/index';
// TODO get connects from context instead

export const resolvers = {
    Query: {
        foodtrucks: () => {
            return FoodTruck.all();
        },
        users: () => {
            return User.all(); 
        },
    },
    Mutation: {
        addUser: (root, args) => {
            return User.create(args);
        },
        addFoodTruck: (root, args) => {
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