import "../static/index.css";
import React, { Component } from "react";
import store from '../store';
import {getDelCheckTodoAction,getAllCheckAction} from '../actionCreators';
export default class Foot extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();
     //订阅store的改变，通过_handleStoreChange方法中的getState()方法获取到更新后的数据
     this._handleStoreChange = this._handleStoreChange.bind(this);
     store.subscribe(this._handleStoreChange);
  }
  // static propType= {
  //   optionsNum:PropTypes.number.isRequired,
  //   finishedCount:PropTypes.number.isRequired,
  //   delCheckedTodo:PropTypes.func.isRequired,
  //   allCheck:PropTypes.bool.isRequired,
  //   allCheckChange:PropTypes.func.isRequired,
  // }

  render() {
    const {finishedCount,optionsNum,todos,allCheck} = this.state;
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox"  checked={allCheck} 
          onChange={
            ()=>{
              this._allCheckChange();
            }
          }
          />
        </label>
        <span>
          <span>已完成{finishedCount}件</span> / 总计{optionsNum}件
        </span>
        <button className="btn btn-warning"
        onClick={()=>{
          this._delCheckedTodo(todos);
        }}
        >清除已完成任务</button>
      </div>
    );
  }
  _allCheckChange(){
    const action = getAllCheckAction();
    store.dispatch(action);
  }
  _delCheckedTodo(){
    const action = getDelCheckTodoAction();
    store.dispatch(action);
  }
  getAllCheckAction
  _handleStoreChange() {
    this.setState(store.getState());
  }
}
