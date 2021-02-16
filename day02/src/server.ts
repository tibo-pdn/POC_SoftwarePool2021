import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from "cookie-parser";

const server = express();
server.use(bodyParser.json());
server.use(cookieParser());

server.get('/', function (req, res) {
    res.send('Welcome to home page');
})
server.get('/hello', function (req, res) {
    res.send('world');
})
server.get('/repeat-my-query', function (req, res) {
    const message = req.query.message;
    if (!message)
        res.status(400).send('Bad request')
    else
        res.status(200).send(message);
})
server.post('/repeat-my-body', function (req, res) {
    const body = req.body;
    if (!Object.keys(body).length)
        res.status(400).send('Bad request')
    else
        res.status(200).send(body);
})
server.get('/repeat-my-cookie', function (req, res) {
    const cookie = req.cookies;
    if (!Object.keys(cookie).length)
        res.status(400).send('Bad request')
    else
        res.status(200).send(cookie);
})
server.get('/repeat-my-header', function (req, res) {
    if (!req.header('X-message'))
        res.status(400).send('Bad request')
    else
        res.status(200).send(req.header('X-message'));
})
server.get('/repeat-my-param/:message', function (req, res) {
    res.send(req.params.message);
})

server.listen(8080);
