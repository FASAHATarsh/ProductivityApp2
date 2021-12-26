import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './src/components/Todos';
import Header from './src/components/layout/Header';
import AddTodo from './src/components/AddTodo';
import '../assets/App.css';

class App extends Component {
  state = {
    todos: [
      {
        "id": 1,
        "note": "Design the solution",
        "completed": false
      },
      {
        "id": 2,
        "note": "Prepare for implementation",
        "completed": false
      },
      {
        "id": 3,
        "note": "Prepare the test/QA environment",
        "completed": false
      },
      {
        "id": 4,
        "note": "Install the product in the test/QA environment",
        "completed": false
      },
      {
        "id": 5,
        "note": "Prepare the production environment",
        "completed": false
      },
    ]
  }

  componentDidMount() {
    
  }

  // Mark as Complete Todo
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id)
          todo.completed = !todo.completed;
        return todo;
       })
    });
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  //add Todo
  addTodo = (note) => {
    const id = this.state.todos.length + 1;
    const newTodo = {
      id: id,
      note: note,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <br />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
            )} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;