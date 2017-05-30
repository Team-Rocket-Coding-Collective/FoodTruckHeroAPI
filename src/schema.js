import { makeExecutableSchema,
    addMockFunctionsToSchema
} from 'graphql-tools';
import resolvers from './resolvers/rootResolver';

const typeDefs = `

type User {
    name: String!
    email: String!
    foodtrucks: [FoodTruck]
}

type FoodTruck {
    name: String!
    description: String    
    latitude: Float!
    owner: User!    
    longitude: Float!
    location: String
    cusineTypes: [String]
    diets: [String]
    tags: [String]
    website: String
    twitter: String
}

type Query {
    foodtrucks: [FoodTruck]
    users: [User]
}

type Mutation {
    addUser(name: String!, email: String!, userType: String): User
    addFoodTruck(name: String!, ownerId: Int!, latitude: Float, longitude: Float, cusineTypes: [String], diets: [String], tags: [String], website: String, twitter: String): FoodTruck
}

`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
//addMockFunctionsToSchema({ schema }); //TODO can be used for testing
export { schema };