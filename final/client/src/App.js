import React, { Component } from 'react';
import axios from 'axios';
import 'bulma/css/bulma.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      todoAdd: '',
      todoList: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/api/', {
        header: {
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(res =>
        this.setState({
          todoList: res.data
        })
      );
  }

  handleChange(e) {
    const value = e.target.value;

    this.setState({
      todoAdd: value
    });
  }

  handleAdd() {
    const value = this.state.todoAdd;

    if (!value.length) {
      return;
    }

    axios
      .post('http://localhost:3001/api/', {
        title: value,
        completed: false
      })
      .then(() => this.setState({ todoAdd: '' }));
  }

  render() {
    return (
      <div>
        <div className="field is-grouped">
          <input
            className="input"
            type="text"
            placeholder="todo title"
            onChange={this.handleChange}
            value={this.state.todoAdd}
          />
          <button className="button is-primary" onClick={this.handleAdd}>
            Add
          </button>
        </div>
        <div className="box">
          <table className="table is-striped is-fullwidth">
            <thead>
              <tr>
                <th>Title</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todoList.map(todoItem => (
                <tr key={todoItem._id}>
                  <td>{todoItem.title}</td>
                  <td>
                    <i className="fas fa-edit" />
                  </td>
                  <td>
                    <i className="fas fa-trash-alt" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
