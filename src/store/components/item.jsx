import "../static/index.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import store from '../store';
import {getDelItemAction,getChangeItemFinishedAction} from "../actionCreators"

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDelBtn: false,
    };
  }

  static propType = {
    todo: PropTypes.object.isRequired,
  };

  render() {
    const { todo} = this.props;
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
            this._itemChange(todo.id,!todo.finish)
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
  //在此做删除动作
  _itemRemove(todoId){
    const action = getDelItemAction(todoId);
    store.dispatch(action);
  }
  //在此做选中动作 
  _itemChange(todoId,isFinish){
    const action = getChangeItemFinishedAction(todoId,isFinish);
    store.dispatch(action);
  }

}
