import { makeExecutableSchema,
    addMockFunctionsToSchema
} from 'graphql-tools';
import resolvers from './resolvers/rootResolver';

const typeDefs = `

type User {
    name: String!
    email: String!
}

type FoodTruck {
    owner: User!
    name: String!
    latitude: Float!
    longitude: Float!
}

type Query {
    foodtrucks: [FoodTruck]
    users: [User]
}

type Mutation {
    addUser(name: String!, email: String!, userType: String!): User
}

`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
//addMockFunctionsToSchema({ schema }); //TODO can be used for testing
export { schema };