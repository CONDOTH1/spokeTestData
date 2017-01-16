process.env.NODE_ENV = 'DEVELOPMENT';
var server = require('./app.js');
server.listen();

console.log("This Server Is Running on port "+ (process.env.PORT || 4000));
