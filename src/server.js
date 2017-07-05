// @flow
import fs from 'fs';

import express from 'express';
import bodyParser from 'body-parser';
import ini from 'ini';
import { 
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';

import { schema } from './schema.js';


const config = ini.parse(fs.readFileSync('./local.ini', 'utf-8'));
const PORT = config.server.PORT || 4000;
const server = express();


server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

server.listen(PORT, () => 
  console.log(`GraphQL Server is now running on http://localhost:${PORT}`)
);