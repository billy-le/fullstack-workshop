'use strict';

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const assert = require('assert');

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, client) => {
  assert.equal(null, err);

  console.log(`Successfully connected to ${url}`);

  const collection = client.db('todoApp').collection('todoItem');

  collection.findOneAndDelete(
    {
      _id: ObjectId('5ab1efdea1ca172701c8d146')
    },
    (err, doc) => {
      assert.equal(null, err);

      const result = JSON.parse(JSON.stringify(doc));
      console.log(
        `The document: ${result.value.title} was successfully deleted`
      );
    }
  );

  client.close();
});
