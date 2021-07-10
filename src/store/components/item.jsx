import "../static/index.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import store from '../store';
import {getDelItemAction} from "../actionCreators"

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDelBtn: false,
    };
  }

  static propType = {
    todo: PropTypes.object.isRequired,
    removeTodoById: PropTypes.func.isRequired,
    changefinishedList:PropTypes.func.isRequired,
  };

  render() {
    const { todo ,removeTodoById,changefinishedList} = this.props;
    const { showDelBtn } = this.state;
    return (
      //调用鼠标检测改变button的状态
      <li
        //   在按钮上时
        onMouseOver={() => this._hasShowBtn(true)}
        //   在按钮外时
        onMouseOut={() => this._hasShowBtn(false)}
      >
        <label>
          <input type="checkbox"
          checked={todo.finish}
          onChange={()=>{
            changefinishedList(todo.id,!todo.finish)
          }}/>
          <span>{todo.title}</span>
        </label>
        {/* //根据状态值切换按钮显示(block)与隐藏(none) */}
        <button
          className="btn btn-warning"
          style={{ display: showDelBtn ? "block" : "none" }}
          onClick={() => {
            this._itemRemove(todo.id);
          }}
        >
          删除
        </button>
      </li>
    );
  }
  //处理按纽显示和隐藏
  _hasShowBtn(flag) {
    this.setState({
      showDelBtn: flag,
    });
  }
  _itemRemove(todoId){
    const action = getDelItemAction(todoId);
    store.dispatch(action);
  }

}
