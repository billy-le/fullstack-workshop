'use strict';

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, client) => {
  if (err) {
    throw new Error(err);
  }
  if (!err) {
    console.log('Successfully connected');
  }
});
