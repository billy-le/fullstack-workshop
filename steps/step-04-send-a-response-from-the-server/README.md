# Sending a Response from the Server

A server's job is to process a request and then send back a response. We will create a simple response using our previous code. There are many different types of requests but the most used are 'GET', 'POST', 'UPDATE', and 'DELETE'. We will be creating a simple 'GET' request.

### Example Code

server-final.js

### Steps

1.  Using your code from the previous step, above the `app.listen` type the following:

    `app.get('/', (req, res) => {res.send('I was sent from the server!'); })`

2.  Here will are using the get method from app. The first parameter passed in is the path in the url address bar and the second parameter is a function that tells the server what to do when a user goes to that address. So our path is '/' using the 'GET' method, and our callback is an anonymous function that takes two arguments, `req` for request, and `res` for response.

3.  Inside the body of the anonymous function, we used `res.send` to send a message to the client aka the browser.

4.  Save the file, go to the terminal and kill any running process by pressing `CTRL + C`. Now run the server again by typing `node server.js`

5.  In your browser, goto [localhost:3001](localhost:3001). There you should see the message 'I was sent from the server!'. This means we are able to get a response from the server!s
