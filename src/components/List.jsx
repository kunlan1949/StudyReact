import "../static/index.css";
import React, { Component } from "react";
//引入了類型檢查包
import PropTypes from "prop-types";
import Item from "./item";
export default class List extends Component {
  //使用類型檢測對數組進行檢查
  static propTypes = {
    todos: PropTypes.array.isRequired, 
    removeTodoById:PropTypes.func.isRequired, 
    changefinishedList:PropTypes.func.isRequired,
  };

  render() {
    const { todos ,removeTodoById,changefinishedList} = this.props;
    console.log(todos);
    return (
      <ul class="todo-main">
        {todos.map((todo, index) => (
          <Item
            key={index}
            todo={todo}
            removeTodoById={removeTodoById}
            changefinishedList={changefinishedList}
          />
        ))
        }
      </ul>
    );
  }
}
