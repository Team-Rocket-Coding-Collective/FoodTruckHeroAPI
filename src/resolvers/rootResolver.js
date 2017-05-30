import { User, FoodTruck } from '../sequelize/models/index';
// TODO get connects from context instead

export const resolvers = {
    Query: {
        foodtrucks: (root, args, r, s) => {
            return FoodTruck.findAll({
                include: [
                    {model: User, as: 'owner'}
                ]
            });
        },
        users: () => {
            // TODO this should also return all the foodtrucks
            return User.findAll({
                include: [
                    {model: FoodTruck, as: 'foodtrucks'}
                ]
            }); 
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