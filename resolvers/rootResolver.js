import { User, FoodTruck } from '../connectors';
// TODO get connects from context instead

let MockUsers = [{
    name: "sta",
    email: "asfsf@gmail.com",
    userType: "Foodie"
}];

let MockFoodTrucks = [{
    owner: MockUsers[0],
    name: "Hot Kabobs",
    latitude: 12.5,
    longitude: 6.5,
}];

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