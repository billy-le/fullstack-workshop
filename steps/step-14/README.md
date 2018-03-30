# The U (Update) in CRUD

Back in our database.js file, we will update one of our documents. Find the `_id` value of the document you want to update using Robo 3T because that is what we will use to find and update the document.

## Example Code

database-final.js

### Step

1.  We are going to find the document with the `_id` of your choosing.

2.  First thing we need to do is require the `ObjectID` from MongoDB. At the top of your file, type `const ObjectId = require('mongodb').ObjectID`

3.  We are going to write a `.findOneAndUpdate()` function from our collection. Type in the following code:

    ```
    collection.findOneAndUpdate(
    {
      _id: ObjectId('5ab1efdea1ca172701c8d146')
    },
    {
      $set: {
        title: 'Woot! Update Complete!'
      }
    },
    {
      returnNewDocument: true
    },
    (err, doc) => {
      assert.equal(null, err);

      const result = JSON.parse(JSON.stringify(doc));
      console.log(
        `The document: ${result.value.title} was successfully updated`
      );
    }
    ```

4.  In the first parameter of the `.findOneAndUpdate()`, we are searching by `_id`. Here I'm searching for one that existed in my database. You need to replace whatever is inside the `ObjectId()` with your own string.

5.  The second parameter is our update method. Here we are using `$set` which sets the field we want to update. I'm updating the field `title` with the string `Woot! Update Complete!`.

6.  The third parameter is additional options, here I'm setting the `returnNewDocument` to true to return the document we just updated.

7.  In the last parameter, I have an anonymous function with our standard (err, doc) and we are checking for any errors during the updating process. If there aren't any, I'm converting our MongoDB document to a plain JavaScript object by first using `JSON.stringify()` to convert it to a JSON object, and then `JSON.parse()` to conver the JSON object to a regular JavaScript object.

8.  Lastly, I'm logging out a success message!
