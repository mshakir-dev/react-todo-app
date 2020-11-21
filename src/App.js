import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About'
import AddTodo from './components/todos/AddTodo';
import Todos from './components/todos/Todos';
import nextId from "react-id-generator";
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: nextId(),
        title: "Complete Todo App",
        completed: false
      },
      {
        id: nextId(),
        title: "Complete Resume",
        completed: true
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }
  
  delTodo = (id) => {
    this.setState ( {todos :[...this.state.todos.filter(todo => todo.id !== id) ] } );  
  }

  addTodo = (title) => {
    console.log(title);
    const newTodo = {
      id: nextId(), title: title, completed: false
    }
    this.setState({todos : [...this.state.todos, newTodo]})
    // this.setState({id: })
  }
  render() {
    return (
      <Router>
        <div>
        <Header />
        <Route exact path="/" render={props => (
          <div className="container">
            <AddTodo addTodo={this.addTodo} />
            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
          </div>
        )} />
        <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
