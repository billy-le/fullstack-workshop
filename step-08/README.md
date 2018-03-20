# Inserting Our First Document in MongoDB

# Example Code

database-final.js

### Step

1.  After installing MongoDB and running the database and service, we will create a basic database. Create a new file called `database.js` in your directory.

2.  We must install the MongoDB npm module in order for us to start making the connection to the MongoDB server that we ran from step 1. In the terminal, in your project directory, type in `npm install mongodb --save`

3.  Inside the file `database.js` type in `use strict` at the top and require the mongodb module by typing `const MongoClient = require('mongodb').MongoClient`. The `.MongoClient` method of the module `mongodb` is our interface to make a connection to our MongoDB server and perform operations.

4.  So now let's go ahead and write some code to connect to our MongoDB server. Type in the following after our require statement:

    ```
    MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db => {
      if (err) {
        throw new Error(err);
      }
      if (!err) {
        console.log('We are connected');
      }
    });
    ```

5.  In a new terminal window, let's make sure our MongoDB server is running, on macOs, run the command `mongod`. You should see a bunch of messages printed into the terminal if you installed MongoDB correctly.

6.  After that, let's go ahead and make a connection with `database.js` to our MongoDB. Type in a separate terminal from the MongoDB server (open a new terminal if you have to), and type `node database.js`. You should see 'We are connected' in the terminal.
