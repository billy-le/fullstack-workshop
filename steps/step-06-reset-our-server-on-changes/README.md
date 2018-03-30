# Setting up a Node Watcher

Resetting the node server can be a pain in the ass so let's set up a tool to watch for changes in our directory and restart our browser for us! The tool we are going to use is called [nodemon](https://nodemon.io/)

## Example Code

server-file.js

### Steps

1.  Kill the current server process in the terminal if you have it running. Type in `npm i nodemon --save-dev`

2.  To run our new tool, we need to call the program from within our project because we used the `--save-dev` flag. The `--save-dev` flag installs the package as a developer dependency which can be found in your `package.json` and `node_modules` folder.

3.  To run the program, we need to call it from the `.bin` folder inside our node_modules because the program is local this project only. Start the server by running `./node_modules/.bin/nodemon server.js`

4.  Your server is now running so let's make a quick console.log() inside of server.js to see if it's detecting our changes. Create a `console.log('This file is being watched')` anywhere in your file. Save it and look at the terminal again. You should see

    ```
    [nodemon] starting `node server-final.js`;
    This file is being watched
    [nodemon] clean exit - waiting for changes before restart
    ```

5.  That's all great but we don't want to always type in `./node_modules/.bin/nodemon` every single time. Let's create a script in our `package.json` to run this task for us.

6.  Inside the `package.json`, in the key `scripts`, type in `"server": "./node_modules/.bin/nodemon server.js"` and save the file.

7.  Kill the running nodemon process in the terminal and type `npm run server`. You should see the same output as before! Now you don't have to type that long command. All you have to do is `npm run server` to start your server.
