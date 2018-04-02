import React, { Component } from 'react';

export class TodoItemDone extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.props.removeTodo(e.target.value)
  }

  render(){
    let items = this.props.items;
    const list = items.map((item)=>
            <li  >{item}
              <button class="remove-item btn btn-default btn-xs pull-right"
                value={item}
                onClick={this.handleClick}
              >X</button></li>
    );
    return (
      <div class="todolist">
       <h1>Already Done</h1>
          <ul id="done-items" class="list-unstyled">
              {list}

          </ul>
      </div>
    );
  }
}
