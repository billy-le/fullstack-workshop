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

3.  Adding the code above allows our client (browser) to make requests to our server. Our client, which you will see later will be hosted on port 3000. This is the default for the create-react-app which we will be using.

4.  Without getting into much details about the code, it's important to know that there is something called Cross-Origin-Resource-Sharing or CORS for short. CORS is a web technology that doesn't allow sharing from a different point of origin. That means if you're on website, www.you.com, and you're trying to retrieve personal information from www.me.com, you're more than likely will be blocked by the CORS policy implemented by browsers. If you're interested, you can read more about a [simple explanation on CORS](https://medium.com/@baphemot/understanding-cors-18ad6b478e2b).
