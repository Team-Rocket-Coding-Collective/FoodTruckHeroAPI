# FoodTruckHeroAPI

## Description
TODO

## Development

Simply run
```
npm install
npm start
```

Then checkout http://localhost:4000/graphiql
and you should have an interface to make queries
If you're unfamilar with GraphQL then you should checkout this

### Example queries

```
query {
  foodtrucks {
    name
    latitude
    long
  }
}
```

```
mutation {
  addUser(name: "syed", email: "agasf@fakemail.com", userType: "Owner") {
    name
    email
    userType
  }
}
```