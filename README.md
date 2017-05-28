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
  addUser(name: "syed", email: "agasf@fakemail.com", userType: "Owner") {
    name
    email
    userType
  }
}
```


### database
I plan on researching how I should handle this later but currently I'm just running ` psql -f tempScripts.sql example postgres` and if you look at connectors.js you might have an idea of how to set your local postgres instance.

Maybe we should have a shared postgres instance on AWS or something.