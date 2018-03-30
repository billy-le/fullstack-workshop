# Sending Files to the Client

Great! So we are able to send messages from the server to the client through the response object. We can also send files as well! Let's send a html file so the browser can render.

## Example Code

server-final.js

### Steps

1.  Inside the `app.get('/')` body, remove the `res.send()` function and replace it with `res.sendFile(__dirname + '/index.html')` and save it.

2.  Copy the index.html file from this directory to your own or you can create your own index.html file.

3.  Kill the node server in the terminal with `CTRL + C`, if there are any, and run `node server.js` once again.

4.  In your web browser, go to [localhost:3001](localhost:3001) or refresh the page if you're already there.

5.  You should now see your index.html document loaded in the browser now.
