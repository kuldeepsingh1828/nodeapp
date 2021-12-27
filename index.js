const express = require('express')
const morgan = require('morgan')
const adminRoute = require('./routes/admin');
const userRoute = require('./routes/user');
const server = express();
const path = require('path');

server.use(morgan('tiny'));
server.use(express.static(path.join(__dirname, 'views')));
console.log(path.join(__dirname, 'views'))

server.use('/user', userRoute);
server.use('/admin', adminRoute);

server.listen(3000, () => {
    console.log('server is running on 3000');
});