// @flow
import fs from 'fs';

import express from 'express';
import bodyParser from 'body-parser';
import ini from 'ini';
import Twitter from 'twitter';
import { 
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';

import { schema } from './schema.js';


const config = ini.parse(fs.readFileSync('./local.ini', 'utf-8'));
const PORT = config.server.PORT || 4000;
const server = express();


const tc = config.twitter_credentials;

const twitterClient = new Twitter({
    consumer_key: tc.consumer_key,
    consumer_secret: tc.consumer_secret,
    access_token_key: tc.access_token_key,
    access_token_secret: tc.access_token_secret
});

const FoodTrucksTwitterIDs = {
    ChickfilaMobile: "540537070",
    tropicburger: "722571703008825344",
    misohoney: "3116100630",
    TempoDiPasta: "748409317",
    killertpizza: "3371727393",
    kimchibbq: "177850342",
    DCMangiaTutti: "806275474896912384",

    //not food trucks -- these users tweets frequently, which is good for development
    sanityCheck1: "759251",
    sanityCheck2: "8453452"
};


server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));


let stream = twitterClient.stream(
    'statuses/filter',
    {
        follow: Object.values(FoodTrucksTwitterIDs).join(',')
    }
);
stream.on('data', event => {
    console.log(event && event.text);
});
stream.on('error', e => console.error(e));


server.get('/twitter', (request, response) => {
    response.send("Foo");
});

server.listen(PORT, () => 
  console.log(`GraphQL Server is now running on http://localhost:${PORT}`)
);