# Create-React-App Clean-Up

We are going to remove some unnecessary code and files to make our app cleaner and easier to start from "scratch".

### Steps

1.  Delete all the files from within the newly created `client` folder:

    ```
    README.md
    App.css
    App.test.js
    index.css
    logo.svg
    registerServiceWorker.js
    ```

2.  Now we want to remove those references from the files we want to keep. Delete the following lines of code from the `App.js` file:

    ```
    import logo from './logo.svg'
    import './App.css';
    ```

    And replace all the HTML-like code in the `return` block, which is called JSX (we'll get to this later), with:

    ```
    <div>Hello World!</div>
    ```

    So what you should have left in `App.js` is:

    ```
    import React, { Component } from 'react';

    class App extends Component {
      render() {
        return (
          <div>
            Hello World!
          </div>
        );
      }
    }

    export default App;
    ```

3.  Delete the lines of code from the following `index.js` file:

    ```
    import './index.css';
    import registerServiceWorker from './registerServiceWorker';
    registerServiceWorker();
    ```

    What you should have in `index.js` is:

    ```
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';

    ReactDOM.render(<App />, document.getElementById('root'));
    ```
