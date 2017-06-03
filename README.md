# FoodTruckHeroAPI

## Description
TODO

## Development

Install postgres https://www.postgresql.org/download/
There are some default parameters in src/sequelize/config/config.json
but you can override any of them by creating a config-override.json file in the same directory.

Once you have that set up properly

Simply run
```
npm install
npm run migrate
npm start
```

Then go to http://localhost:4000/graphiql
and you should have an interface to make queries
If you're unfamilar with GraphQL then you should checkout this

### Example queries
http://localhost:4000/graphiql?query=query%20%7B%0A%20%20users%20%7B%0A%20%20%20%20name%0A%20%20%20%20email%0A%20%20%7D%0A%7D&operationName=undefined
```
query {
  users {
    name
    email
  }
}
```

```
mutation {
  addUser(name: "syed", email: "agasf@fakemail.com") {
    name
    email
  }
}
```