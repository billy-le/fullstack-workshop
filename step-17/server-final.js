'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const assert = require('assert');
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, client) => {
  assert.equal(null, err);
  console.log(`Successfully connected to ${url}`);
  const collection = client.db('todoApp').collection('todoItem');

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.get('/', (req, res) => {
    collection.find({}).toArray((err, docs) => {
      assert.equal(null, err);

      res.status(200).send(docs);
    });
  });

  app.listen(3000, () => {
    console.log('The server is listening on PORT 3000');
  });
});
