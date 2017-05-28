import { User, FoodTruck } from '../connectors';
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
            MockUsers.push({...args});
            return [...MockUsers].pop();
        },
        // addFoodTruck: (root, args) => {
        //     MockFoodTrucks.push({...args});
        //     return MockFoodTrucks[-1];
        // },
    }
}

export default resolvers;