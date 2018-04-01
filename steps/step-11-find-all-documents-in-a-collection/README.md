# The R (read / retrieve) in CRUD

We need to find out what's in our `todoApp` database and check the `todoItem` collection. We do this by performing what's called a Read or Retrieve operation.

# Example Code

database-final.js

### Steps

1.  Inside your `database.js` file, delete the previous `collection.insertMany()` and `const data` code.

2.  Let's replace that line of code with:

    ```
    collection.find({}).toArray((err, docs) => {
      console.log(docs);
    })
    ```

3.  Save the file and run it using node. You should see all your documents printed out in your terminal!

4.  Let's break down what's happening in step 2. We are using the `.find({})` method on our MongoDB collection which returns a cursor. I have no idea what that is but it's unusable in JavaScript unless we use the `toArray()` function on it. Here's the nitty-gritty on [cursor](https://docs.mongodb.com/manual/tutorial/iterate-a-cursor/#read-operations-cursors) if you want to read about them.

5.  So we use the `toArray()` which puts our query from `.find({})` into a JavaScript array. Now we will use `console.log(docs)` and we get our results! Pretty neat, eh?!

    ```
    Successfully connected to mongodb://localhost:27017
    [ { _id: 5ab1efdea1ca172701c8d146,
        title: 'clean the house',
        completed: false },
      { _id: 5ab1efdea1ca172701c8d147,
        title: 'do my taxes',
        completed: false },
      { _id: 5ab1efdea1ca172701c8d148,
        title: 'change the oil',
        completed: false },
      { _id: 5ab1efdea1ca172701c8d149,
        title: 'finish freeCodeCamp',
        completed: false },
      { _id: 5ab1efdea1ca172701c8d14a,
        title: 'make friends',
        completed: false } ]
    ```

6.  You may noticed the `_id` field in the results. This is a unique id that that MongoDB generates for us. We can find a specific document using these id's but that comes later. Hold still!
