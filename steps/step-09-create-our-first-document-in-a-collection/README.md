# Creating Our First Collection in MongoDB

We'll be connecting to our database and create a collection so we can start inserting, retrieving, updating, and deleting documents - the basics of CRUD! But let's just create one document for now.

# Example Code

database-final.js

### Steps

1.  The first thing we are going to do is make some small changes. At the top, we are going to import a node module called `assert`. It allows us to test things to see if they are true or not. After the `const MongoClient = require('mongodb').MongoClient` type in `const assert = require('assert')`;

2.  Delete both if statements inside the block of our `MongoClient.connect()` function. Inside the block, now type in `assert.equal(null, err)`. [`assert.equal()`](https://nodejs.org/api/assert.html#assert_assert_equal_actual_expected_message) takes two arguments, the first being the actual value we want, and the second is the thing we want to test against in the first parameter. In this case, this is saying, "Hey, check to see if the object that's coming back from the connection is null, if not, send an error message back to the client".

3.  Now let's move the `mongodb://localhost:27017/todoApp` in a variable of its own but remove the `todoApp` part. Between the `const assert` and `MongoClient.connect()`, create a variable `const url = 'mongodb://localhost:27017'`. Replace the string now with the url as such `MongoClient.connect(url, (err, client) { ... })`. And then let's add `` console.log(`Successfully connected to ${url}`) `` after our assertion.

4.  Now let's go make that collection and insert our first document! After our `console.log()` statement, type in the following:

    ```
    const collection = client.db('todoApp').collection('todoItem');

    collection.insert(
      {
        title: 'finish workshop',
        completed: false,
      }
    );

    client.close();
    ```

5.  Let's break this part down. The first thing is we are storing the reference to our collection called 'todoItem' inside of a database called 'todoApp'. We did this all in one line using the `client` object that was passed as a parameter from the `.connect()` function.

6.  After creating the collection, we are now ready to insert / add our first document. We called `collection.insert()` that takes an object as an argument. This object we passed in is our model for our todoItem! It has a title as a string value and completed as our boolean value.

7.  At the end of the file, we `client.close()` which tells the MongoDB server to close the connection between this file and the MongoDB server.

8.  Congratulations! You've just created your first document inside of MongoDB! Aren't you proud of yourself?
