import "../static/index.css";
import React, { Component } from "react";
import store from "../store";
import { getAddItemAction } from "../actionCreators";
export default class Head extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.myInput = React.createRef();

    //订阅store的改变，通过_handleStoreChange方法中的getState()方法获取到更新后的数据
    this._handleStoreChange = this._handleStoreChange.bind(this);
    store.subscribe(this._handleStoreChange);
  }

  // static propsType = {
  //   //最后一条记录的ID
  //   lastTodoId: PropTypes.number.isRequired,
  //   addOne: PropTypes.func.isRequired,
  // };

  render() {
    return (
      <div className="todo-header">
        <input
          ref={this.myInput}
          type="text"
          placeholder="在此添加选项，按回车键确认"
          onKeyDown={(e) => this._handleEvents(e)}
        />
      </div>
    );
  }

  _handleEvents(e) {
    const { todos } = this.state;
    const lastTodoId = todos.length === 0 ? 0 : todos[todos.length - 1].id;
    if (e.keyCode === 13) {
      if (!this.myInput.current.value) {
        alert("不能为空!");
      } else {
        const todo = {
          id: lastTodoId + 1,
          title: this.myInput.current.value,
          finish: false,
        };

        //将Item的值传入ction方法以此添加入数组
        const action = getAddItemAction(todo);
        //执行action方法
        store.dispatch(action);

        this.myInput.current.value = "";
      }
    }
  }
  _handleStoreChange() {
    this.setState(store.getState());
  }
}
