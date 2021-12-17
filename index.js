const express = require('express')
const morgan = require('morgan')
morgan();
const server = express();
server.listen(3000, () => {
    console.log('server is running');
});