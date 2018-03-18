# Creating Your First Server

We're going to create a server now using express!

### Code Example

server-final.js

### Steps

1.  Create a file in this directory called `server.js`.

2.  At the top of the file, on line 1, type in `use strict`. `use strict` puts the environment in strict mode and throw more errors. We use strict mode because we want our backend to be compatible with older versions of JavaScript.

3.  Now we must import our express module that will downloaded in the previous step. Type in `const express = require('express')`. What we are doing here is importing the whole express module by requiring it and storing that in a constant variable named express.

4.  We have to invoke the whole express module so that we can have access to it's public functions. On the next line, type `const app = express()`.

5.  It's time to make use of the variable app. We are going to create our server to listen on port 3000. This port is where we can send requests to the server and get back responses. On a new line, type the following:

    `app.listen(3000, () => { console.log('The server is listening on PORT 3000') })`

6.  Back in terminal, we are going to run our server file using node. Make sure you are in this directory and then type `node server.js`. You should see the message "The server is listening on PORT 3000".

7.  Open your web browser of your choice and type in the address bar: `localhost:3000`. You should see a message that says `Cannot GET /`. That means we have our server running but it has nothing to serve us.

8.  Congratulations! You've created your server.
