import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoInput} from './components/TodoInput';
import {TodoItem} from './components/TodoItem';
import {TodoFooter} from './components/TodoFooter';
import {TodoItemDone} from './components/TodoItemDone';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        "Make dinner tonight!",
        "Fold the laundry."
      ],
      todosDone: [
        "Learn to make a React app!"
      ],
    }

    this.addTodo = this.addTodo.bind(this);
    this.doneTodo = this.doneTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(newTodo){
    let todos =  this.state.todos;
    todos.push(newTodo);
    this.setState({ todos:  todos});
  }

  doneTodo(TodoName){
    let newTodos = this.state.todos.filter(item => item!=TodoName);
    this.setState({todos: newTodos});

    let todosDone =  this.state.todosDone;
    todosDone.push(TodoName);
    this.setState({todosDone:todosDone });
  }

  removeTodo(todoName){
    let newTodosDone = this.state.todosDone.filter(item => item!=todoName);
    this.setState({todosDone: newTodosDone});
  }

  render() {
    return (
      <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="todolist not-done">
                 <h1>Todos</h1>
                  <TodoInput addTodo={this.addTodo} />
                  <hr />
                  <TodoItem items={this.state.todos} doneTodo={this.doneTodo}/>
                  <TodoFooter countTodos={this.state.todos.length}/>

                </div>
            </div>
            <div class="col-md-6">
                <TodoItemDone items={this.state.todosDone} removeTodo={this.removeTodo}/>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
