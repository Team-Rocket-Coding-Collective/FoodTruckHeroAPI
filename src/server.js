// @flow
import fs from 'fs';
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import SocketIO from 'socket.io';
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
const httpServer = http.createServer(server);

server.use(express.static('src'));

server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

server.get('/twitter', (request, response) => {
    response.sendFile(path.join(__dirname, 'debug.html'));
});

// Serve via http server to enable web socket connections
httpServer.listen(PORT, () => 
  console.log(`GraphQL Server is now running on http://localhost:${PORT}`)
);


const io = SocketIO(httpServer);

// Setup a twitter client with credentials defined in local.ini
const tc = config.twitter_credentials;
const twitterClient = new Twitter({
    consumer_key: tc.consumer_key,
    consumer_secret: tc.consumer_secret,
    access_token_key: tc.access_token_key,
    access_token_secret: tc.access_token_secret
});

// Food truck twitter IDs used to specify which tweets we want to read from
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

// Specify params to send to our request
const streamParams = { follow: Object.values(FoodTrucksTwitterIDs).join(',') };


// Once a socket connection has been established...
io.on('connection', socket => {

    // Start streaming the twitter statuses of our specified food trucks
    twitterClient.stream('statuses/filter', streamParams, stream => {
            stream.on('data', event => {
                // When we receive a tweet, send it to the client side
                socket.emit('tweet', { event, content: event.text });
            });
            stream.on('error', e => console.error(e));
        }
    );

});