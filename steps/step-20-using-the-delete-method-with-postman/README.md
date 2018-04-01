# The "DELETE" method

Last but not least is our `DELETE` method to delete documents from out database.

## Example Code

server-final.js

### Steps

1.  This is going to be our code for deleting our todo item:

    ```
    app.delete('/:itemId', (req, res) => {
      const itemId = req.params.itemId;

      collection.findOneAndDelete(
        {
          _id: ObjectId(itemId)
        },
        (err, doc) => {
          assert.equal(null, err);

          const result = JSON.parse(JSON.stringify(doc));

          if (!result.value) {
            console.log('The todo item does not exist');
            return res.sendStatus(400);
          }

          console.log(
            `The todo item: ${result.value.title} was successfully deleted.`
          );

          return res.sendStatus(200);
        }
      );
    });
    ```

2.  This is very similar to our `.findOneAndDelete()` in our `database.js` in step-15. We just added a short-circuit in case the todo item does not exist. First we store the results in a useable JavaScript object called `result` and check to see if there is a value. If there isn't, then return a status code of 400.

3.  If it successfully deleted, it will log out our todo item in the terminal and send a status of 200 back to the client.
