import React, { Component } from 'react';
export class TodoInput extends React.Component{

  constructor(props){
    super(props);
    this.state = { value: ''};
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e){
    this.setState({value: e.target.value});
  }

  handleClick(e){
    let text = this.state.value;
    if (text!='') {
      this.props.addTodo(text);
      this.setState({value: ''});
    }


  }

  render(){
    return (
      <div>
        <input type="text" class="form-control add-todo" placeholder="Add todo"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <button id="checkAll" class="btn btn-success" onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}
