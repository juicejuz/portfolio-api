const express = require('express');
const winston = require('winston');

const app = express();

// require('./startup/logging')();
// require('./startup/routes')(app);
// require('./startup/db')();
// require('./startup/config')();
// require('./startup/validation')();
// require('./startup/prod')(app);

const port = process.env.PORT || 3900;
const server = app.listen(port, () => {
  winston.info(`server listen on port ${port}...`);
});

module.exports = server;
