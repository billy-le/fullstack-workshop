'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3001, () => {
  console.log('The is server listening on PORT 3001');
});
