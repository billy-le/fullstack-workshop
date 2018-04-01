# The C (create) in CRUD

So we are going to play around in our `database.js` file before we finally delete it. It's time to start doing all the operations in CRUD. I've shown you how to insert one document, but how about many documents? What if that data happens to be JSON? Don't fret! I got you in the section below.

# Example Code

database-final.js

### Steps

1.  Inside your `database.js` file, delete the previous `collection.insert()` code. We are moving on to insert a metric shit ton of documents! Just kidding.

2.  Go ahead and copy this JSON file and save it as `data.json` in your directory:

    ```
    [
      {
        "title": "clean the house",
        "completed": false
      },
      {
        "title": "do my taxes",
        "completed": false
      },
      {
        "title": "change the oil",
        "completed": false
      },
      {
        "title": "finish freeCodeCamp",
        "completed": false
      },
      {
        "title": "make friends",
        "completed": false
      }
    ]
    ```

3.  Alright, let's go ahead and require the `data.json` file near the top of the file after the `require('assert')` statement. You know how to do this now, right? If you forgot, it's `const data = require('./data')`. Don't forget the `./` since we are requiring a local file in the root directory.

4.  After that is said and done, after the declaration of `const collection` type `collection.insertMany(data)`. Save the file.

5.  Now in the terminal, go ahead and type `node database.js`. You should see the console.log() of a successful operation.

6.  But how do we know if it's actually in our database? It's time for the R (read / retrieve) operation in CRUD!
