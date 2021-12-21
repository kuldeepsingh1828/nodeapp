const express = require('express')
const morgan = require('morgan')
const server = express();
const path = require('path');

server.use(morgan('tiny'));
server.use(express.static(path.join(__dirname, 'views')));
console.log(path.join(__dirname, 'views'))

server.get('/', (req, res) => {
    res.send('hi get request');
})
server.post('/user', (req, res) => {
    res.send('You have attempted to login')
})
server.get('/user', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
    // res.send('')
})

server.get('/admin', (req, res) => {
    res.send('show admin login page');
})
server.post('/', (req, res) => {
    res.send('hi post reques');
})

server.listen(3000, () => {
    console.log('server is running');
});