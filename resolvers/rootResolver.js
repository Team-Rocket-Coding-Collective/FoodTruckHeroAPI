//TODO connect postgres

const MockUsers = [{
    name: "sta",
    email: "asfsf@gmail.com",
    userType: "Foodie"
}];

const MockFoodTrucks = [{
    owner: MockUsers[0],
    name: "Hot Kabobs",
    latitude: 12.5,
    longitude: 6.5,
}];

export const resolvers = {
    Query: {
        foodtrucks: () => {
            return MockFoodTrucks;
        },
        users: () => {
            return MockUsers;
        },
    }
}

export default resolvers;