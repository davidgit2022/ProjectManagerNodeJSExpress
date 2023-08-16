const express = require('express');
const cors = require('cors');
const apiRouter = require('./server/index.js');
const { boomErrorHandler, errorHandler, logErrors, ormErrorHandler } = require('./middlewares/error.handler.js');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from server of express');
});

apiRouter(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

module.exports = app;