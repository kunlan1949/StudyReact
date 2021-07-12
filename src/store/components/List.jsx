import "../static/index.css";
import React, { Component } from "react";
import Item from "./item";
import store from "../store";

export default class List extends Component {
  constructor(props) {
    super(props);
    //获取初始的List数据
    this.state = store.getState();
    //订阅store的改变，通过_handleStoreChange方法中的getState()方法获取到更新后的数据
    this._handleStoreChange = this._handleStoreChange.bind(this);
    store.subscribe(this._handleStoreChange);
  }


  render() {
    // console.log(this.state);
    const {todos} = this.state;
    console.log(todos);
    return (
      <ul className="todo-main">
        {todos.map((todo, index) => (
          <Item
            key={index}
            todo={todo}
          />
        ))}
      </ul>
    );
  }

  _handleStoreChange(){
    this.setState(
      store.getState()
    );
  }
}
