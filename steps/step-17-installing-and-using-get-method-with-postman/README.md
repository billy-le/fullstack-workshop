# The "GET" method

Let's work return data from our `GET` request.

## Example Code

server-final.js

### Steps

1.  Okay, let's now get all our files and make the request! First thing you want is [Postman](https://www.getpostman.com/). It's a Google application that you can use to test your API's endpoints. Also, let's delete our `index.html` since we will makes some changes in our `server.js` file.

2.  After that let's change the code in our `app.get()` to:

    ```
    app.get('/', (req, res) => {
      collection.find({}).toArray((err, docs) => {
        assert.equal(null, err);

        res.status(200).send(docs);
      });
    });
    ```

3.  Open up Postman now and make sure you the the `GET` method selected and type in the address bar the URL: `localhost:3001/`.

4.  Make sure your server is running by typing in the terminal in your project root `npm run server`.

5.  When it's running, hit the send button on Postman and you should see all your data from the database in the API!

6.  Sweet!
