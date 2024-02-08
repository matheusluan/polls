import fastify from 'fastify';
import websocket from '@fastify/websocket';
import { createPoll } from './routes/create-poll';
import { getPoll } from './routes/get-poll';
import { voteOnPoll } from './routes/vote-on-poll';
import cookie from '@fastify/cookie';
import { pollResults } from './ws/poll-results';

const app = fastify();

app.register(cookie, {
    secret: "poll-app-nlw-mth-br",
    hook: "onRequest"
});

app.register(websocket);

//HTTP rotes
app.register(createPoll);
app.register(getPoll);
app.register(voteOnPoll);

//Websocket rotes
app.register(pollResults);

app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running!')
});