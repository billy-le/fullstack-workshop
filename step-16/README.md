# Creating our REST API

We will be working on building our REST API. It's a way of writing url's and parameters so that it's easy to understand for other people who may be developing on our API's. We already seen our `GET` method, so let's prepare our code for it.

## Example Code

server-final.js

### Step

1.  The next thing we want to do is install `body-parser`. It's a library that helps use convert some of our front-end input into something that our express can read and work with.

2.  In the terminal, in the root directory of your project folder, type in `npm i body-parser --save`.

3.  Inside of our `server.js` file, we are going to wrap the `app.get()` code with our MongoClient.

4.  At the top, after the `const app` statement, let's require our body-parser by typing in `const bodyParser = require('body-parser')`. Then after that, let's require all our MongoDB stuff from before in our `database.js` file.

5.  Now let's wrap our `app.get()` with the following code:

    ```
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
        res.sendFile(__dirname + '/index.html');
      });

      app.listen(3000, () => {
        console.log('The server is listening on PORT 3000');
      });
    });
    ```

6.  Two new things you should see is the `app.use(bodyParser)`. This tells express that it now has the ability to read these two formats in the request object.

7.  Great! We are good to go!
