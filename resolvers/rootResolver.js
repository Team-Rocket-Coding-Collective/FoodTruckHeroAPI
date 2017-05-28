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
            console.log(args);
            return User.create(args);
        },
        // addFoodTruck: (root, args) => {
        //     MockFoodTrucks.push({...args});
        //     return MockFoodTrucks[-1];
        // },
    }
}

export default resolvers;