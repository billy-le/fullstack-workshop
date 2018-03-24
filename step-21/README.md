# CORS

Allow our front-end to talk to our back-end without CORS issue.

## Example Code

server-final.js

### Step

1.  Now we will add a bunch of stuff I don't understand yet but it allows us to talk to our back-end without any hiccups from CORS.

2.  Add this code right after the `app.use(bodyParser.json())`.

    ```
    app.use(function(req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Credentials', 'true');
      res.setHeader(
        'Access-Control-Allow-Methods',
        'GET,HEAD,OPTIONS,POST,PUT,DELETE'
      );
      res.setHeader(
        'Access-Control-Allow-Headers',
        'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
      );
      res.setHeader('Cache-Control', 'no-cache');
      next();
    });
    ```
