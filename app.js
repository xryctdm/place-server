const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routeCards = require('./routes/cards');
const routeUsers = require('./routes/users');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  req.user = {
    _id: '5ead9aa9c7968332fc22d9bb',
  };

  next();
});

app.use(routeCards);
app.use(routeUsers);
app.use('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${PORT}`);
});
