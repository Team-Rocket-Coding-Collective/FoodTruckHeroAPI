import { makeExecutableSchema,
    addMockFunctionsToSchema
} from 'graphql-tools';

const typeDefs = `

type User {
    name: String!
    email: String!
    userType: String!
}

type FoodTruck {
    owner: User!
    name: String!
    latitude: Float!
    longitude: Float!
}

type Query {
    foodtrucks: [FoodTruck]
}
`;

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema }); //TODO can be used for testing
export { schema };