import "../static/index.css";
import React, { Component } from "react";
//引入了類型檢查包
import PropTypes from "prop-types";
import Item from "./item";
import store from "../store";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    //订阅store的改变，获取到更新后的数据
    this._handleStoreChange = this._handleStoreChange.bind(this);
    store.subscribe(this._handleStoreChange)

  }

  //使用類型檢測對數組進行檢查
  static propTypes = {
    removeTodoById: PropTypes.func.isRequired,
    changefinishedList: PropTypes.func.isRequired,
  };

  render() {
    // console.log(this.state);
    const {todos} = this.state;
    const {removeTodoById, changefinishedList } = this.props;
    console.log(todos);
    return (
      <ul className="todo-main">
        {todos.map((todo, index) => (
          <Item
            key={index}
            todo={todo}
            removeTodoById={removeTodoById}
            changefinishedList={changefinishedList}
          />
        ))}
      </ul>
    );
  }
}
