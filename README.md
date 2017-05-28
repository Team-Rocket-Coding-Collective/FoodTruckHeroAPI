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


### database
I have a shared postgres instance in heroku but it might be unstable for us to all use it at the same time. Not sure what the best solution is for developing locally.

I'm currently running my own instance as you can see in connectors.js

GraphQL Document: graphql script that defines one or more operations and fragments
operation: a query, mutation, or subscription

A field a unit of data you are asking for. ends up as a JSON response data.

Arguments: key value pairs attached to a specific field. Passed into server side executation of this field and affects how it's resolved. 