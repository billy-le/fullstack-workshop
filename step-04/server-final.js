'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('I was sent from the server!');
});

app.listen(3000, () => {
  console.log('The server is listening on PORT 3000');
});
