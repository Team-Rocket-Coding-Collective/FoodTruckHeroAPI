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
http://localhost:4000/graphiql?query=query%20%7B%0A%20%20foodtrucks%20%7B%0A%20%20%20%20name%0A%20%20%20%20latitude%0A%20%20%20%20longitude%0A%20%20%7D%0A%7D&operationName=undefined
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