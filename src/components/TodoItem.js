import React, { Component } from 'react';

export class TodoItem extends React.Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.doneTodo(e.target.value)
  }


  render(){
    let items = this.props.items;
    const list = items.map((item)=>
          <li class="ui-state-default">
              <div class="checkbox">
                  <label>
                      <input type="checkbox" value={item}

                        onClick={this.handleClick}
                      />{item}</label>
              </div>
          </li>
    );
    return (
      <div>
        <ul id="sortable" class="list-unstyled">
            {list}

        </ul>
      </div>
    );
  }
}
