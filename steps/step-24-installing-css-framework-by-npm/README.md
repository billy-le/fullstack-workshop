# Installing a CSS Framework

We will be installing [Bulma](www.bulma.io), a light-weight and minimal CSS framework.

## Example Code

/client/src/App.js
/client/src/index.js

### Steps

1.  In the terminal, navigate to your `/client` folder. From there, type in `npm install bulma bulma-extensions --save`. We are installing bulma through npm which is very different from using the traditional `<link>` tag often found in the index.html.

2.  In our `/client/src/index.js` file, we are now going to import bulma from our `client/node_modules` folder. After all the other import statements, type in `import 'bulma/css/bulma.css';` and `import 'bulma-extensions/bulma-checkradio/dist/bulma-checkradio.min.css';`. We can now use bulma's class names throughout our app.

3.  Then we are going to use [FontAwesome Icons](www.fontawesome.com) for our icon set. In the `client/public/index.html` file, in the `<head>` tag and before the `<title>` tag, include this link tag:

    ```
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.9/css/all.css" integrity="sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1" crossorigin="anonymous">
    ```

4.  For the sake of time, we are going to use a template I've created for our todo application. Copy and paste the following code in the return statement inside of the `/client/src/App.js` file.

    ```
    return (
      <div className="container">
        <h1 className="title is-1 has-text-centered">My Todo App</h1>
        <div className="box">
          <div className="field has-addons has-addons-centered">
            <div className="control">
              <input type="text" name="" id="" className="input is-primary" />
            </div>
            <div className="control">
              <button className="button is-primary">Add</button>
            </div>
          </div>
          <table className="table is-striped is-hoverable is-fullwidth is-narrow has-text-centered">
            <thead>
              <tr>
                <th>Task</th>
                <th className="has-text-centered">Edit</th>
                <th className="has-text-centered">Delete</th>
                <th className="has-text-centered">Completed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>This is where we will put tasks</td>
                <td className="has-text-centered">
                  <i className="fas fa-edit" />
                </td>
                <td className="has-text-centered">
                  <i className="fas fa-trash" />
                </td>
                <td className="has-text-centered">
                  <div className="field">
                    <input
                      className="is-checkradio"
                      id="task-complete"
                      type="checkbox"
                      name="task-complete"
                    />
                    <label htmlFor="task-complete" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
    ```

5.  If your client server is running, you should see your localhost:3000 reload with the new changes you've made. If not, then go back in the terminal, navigate to the `/client` folder, and type in `npm start`. This command will automatically open a new browser tab and load your application.
