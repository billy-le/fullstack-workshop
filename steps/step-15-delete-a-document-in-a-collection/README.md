# The D (Detele) in CRUD

Now it's time to learn how to delete a document in MongoDB.

## Example Code

database-final.js

### Steps

1.  We are going to find the document with the `_id` of your choosing.

2.  We are going to write a `.findOneAndDelete()` function on our collection. Type in the following code:

    ```
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
    ```

3.  Not much has changed from our `.findOneAndUpdate()` from the previous step. All we did was changed the function name to `.findOneAndDelete()` and removed some of the parameters.

4.  Obviously, the first parameter is to search for a single document using a filter.

5.  The second parameter is a callback and we check if the operation is successful by first testing if there is an error and if not, log out the document that was deleted.

6.  Nice! We just did all the operations of CRUD!! Next we are going to finish building our REST api using express!
