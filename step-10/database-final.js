'use strict';

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const data = require('./data');

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, client) => {
  assert.equal(null, err);

  console.log(`Successfully connected to ${url}`);

  const collection = client.db('todoApp').collection('todoItem');

  collection.insertMany(data);
  client.close();
});
