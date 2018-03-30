'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

console.log(`This file is being watched`);

app.listen(3001, () => {
  console.log('The server is listening on PORT 3001');
});
