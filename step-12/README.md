# The R (read / retrieve) in CRUD

We need to find out what's in our `todoApp` database and check the `todoItem` collection. We do this by performing what's called a Read or Retrieve operation.

# Example Code

database-final.js

### Step

1.  Inside your `database.js` file, delete the previous `collection.find({})` code.

2.  Let's replace that line of code with:

    ```
    collection.findOne(
      {
        title: 'finish freeCodeCamp'
      },
      (err, doc) => {
        assert.equal(null, err);

        console.log('I really need to ' + doc.title);
      }
    );
    ```

3.  Save the file and run it using node. You should see one document printed out in your terminal!

4.  Instead of using `.find({})`, we used `.findOne()` here. It actually takes a callback that can be executed if there is an error or if the operation was successful.

5.  In the callback, the err and doc is passed in and we `assert.equal(null, err)` again in the block to check if there are no errors. If there are none, we print a string with the `doc.title`.

6.  We can also find by `_id`, the default id generator that MongoDB provides us. Just replace the `title` with `_id` and the value to the id you're trying to find!
