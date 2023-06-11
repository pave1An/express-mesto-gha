const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/index');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/mestodb', {
  useNewUrlParser: true,
});

app.use((req, res, next) => {
  req.user = { _id: '6481979a5e5ab8b7232b1570' };
  next();
});
app.use(bodyParser.json());
app.use(router);

app.listen(PORT, () => {});
