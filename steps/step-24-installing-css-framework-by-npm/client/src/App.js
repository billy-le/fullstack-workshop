import React, { Component } from 'react';

class App extends Component {
  render() {
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
          <table className="table is-striped is-hoverable is-fullwidth is-narrow">
            <thead>
              <tr>
                <th>Task</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>This is where we will put tasks</td>
                <td>Edit Button</td>
                <td>Delete Button</td>
                <td>Checkbox for task completion</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
