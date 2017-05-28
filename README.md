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
I plan on researching how I should handle this later but currently I'm just running ` psql -f tempScripts.sql example postgres` and if you look at connectors.js you might have an idea of how to set your local postgres instance.

Maybe we should have a shared postgres instance on AWS or something.

Currently executing script on heroku like this:
heroku run  psql -f tempScripts.sql postgres://tjjdjzrggdgolj:06e102ab2fb18623097c511648943ac083bd1505aae9329c0e12b05e4352fc61@ec2-54-243-107-66.compute-1.amazonaws.com:5432/d16jsprr5kalak