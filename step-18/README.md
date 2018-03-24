# Creating our REST API

Let's make sure we can now create todo items using the `POST` request.

## Example Code

server-final.js

### Step

1.  Next up is our `POST` method. It's the method where we can send data to the server inside of the body object.

2.  Let's add our `app.post()` function now. Type in the following code after the `app.get()` request.

    ```
    app.post('/', (req, res) => {
      const todoItem = req.body;

      collection.insert(todoItem, (err, result) => {
        assert.equal(null, err);

        console.log(`The todo item: ${todoItem.title} was successfully created.`);

        res.status(200).send(todoItem);
      });
    });

    app.listen(3000, () => {
      console.log('The server is listening on PORT 3000');
    });
    ```

3.  Okay, now let's test it using Postman to see if it can save to our API. Select `POST` in the Postman application.

4.  Click on the tab where it says `Body` and click on the radio button `raw`. In the dropdown next to it, select `application/JSON` and a text field should appear.

5.  Let's write our JSON object to send as the body:

    ```
    {
      "title": "New item",
      "completed": false
    }
    ```

6.  Now hit send! If all works correctly, you should see a message in the terminal that is running your server and also check Robo 3T to see your next document.

7.  Walah! Let's now work on updating our existing documents.
