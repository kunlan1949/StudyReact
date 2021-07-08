import "../static/index.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
export default class Foot extends Component {

  static propType= {
    optionsNum:PropTypes.number.isRequired,
    finishedCount:PropTypes.number.isRequired,
    delCheckedTodo:PropTypes.func.isRequired,
    allCheck:PropTypes.bool.isRequired,
    allCheckChange:PropTypes.func.isRequired,
  }

  render() {
    const {finishedCount,optionsNum,delCheckedTodo,allCheck,allCheckChange} = this.props;
    return (
      <div class="todo-footer">
        <label>
          <input type="checkbox"  checked={allCheck} onChange={
            ()=>{
              allCheckChange();
            }
          }/>
        </label>
        <span>
          <span>已完成{finishedCount}件</span> / 总计{optionsNum}件
        </span>
        <button class="btn btn-warning"
        onClick={()=>{
          delCheckedTodo();
        }}
        >清除已完成任务</button>
      </div>
    );
  }
}
