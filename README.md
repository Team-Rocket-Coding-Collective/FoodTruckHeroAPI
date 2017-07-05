# FoodTruckHeroAPI

## Description
TODO

## Development

Copy the base.ini file and name it local.ini. Fill in the values suitable for your local development. To use the Twitter API, you will need to create an app in the Twitter API console, and generate an access token.

Install postgres https://www.postgresql.org/download/
You can change any property you want in src/sequelize/config/config-override.json

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