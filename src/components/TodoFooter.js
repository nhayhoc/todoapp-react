import React, { Component } from 'react';

export class TodoFooter extends React.Component{
  render(){

    return (
      <div class="todo-footer">
            <strong><span class="count-todos">{this.props.countTodos}</span></strong> Items Left
      </div>
    );
  }
}
