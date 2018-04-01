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
                  <i className="fas fa-edit has-text-info" />
                </td>
                <td className="has-text-centered has-text-danger">
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
  }
}

export default App;
