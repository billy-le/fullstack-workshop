# The "PUT" method

Time to update our todo items with the `PUT` request.

## Example Code

server-final.js

### Step

1.  This is going to be our code for updating our code:

    ```
    app.put('/:itemId', (req, res) => {
      const itemId = req.params.itemId;
      const todoItem = req.body;
      collection.findOneAndUpdate(
        {
          _id: ObjectId(itemId)
        },
        {
          $set: {
            title: todoItem.title,
            completed: todoItem.completed
          }
        },
        {
          returnNewDocument: true
        },
        (err, doc) => {
          assert.equal(null, err);

          if (!doc.lastErrorObject.updatedExisting) {
            console.log('The todo item does not exist');
            return res.sendStatus(400);
          }

          const result = JSON.parse(JSON.stringify(doc));
          console.log(
            `The todo item: ${result.value.title} was successfully updated.`
          );
          return res.sendStatus(200);
        }
      );
    });
    ```

2.  There is a lot going on in there. It is very similar to what we did in our `database.js` file in step-14. The only difference is that we now include a catching error if the todo item does not exist in our database with the status 400 code:

    ```
    if (!doc.lastErrorObject.updatedExisting) {
        console.log('The todo item does not exist');
        return res.sendStatus(400);
      }
    ```

3.  If it successfully updated, it will log out our todo item in the terminal and send a status of 200 back to the client.
