# Using NPM to install Express.js

We are going to use [NPM (Node Package Manager)](https://www.npmjs.com/) to install [Express.js](https://expressjs.com/).

### Steps

1.  Navigate to this directory in the terminal and type `npm init -y`. This will initialize and create a package.json in your directory that contains basic information about your project.

2.  In the terminal, type in `npm install express --save`. This is saying we are going to use the program npm to install the express package as a dependency. You should now see a `node_modules` folder in your directory. This folder contains all your packages that your project relies on.

3.  You should now see a `package-lock.json` in your directory as well. This file is locking down the version on all your packages that is specified in your `package.json`. It won't let a `npm install` incorrectly install the wrong package versions that can potentially break your app.

4.  Verify in the `package.json` that express is listed as a dependency.
