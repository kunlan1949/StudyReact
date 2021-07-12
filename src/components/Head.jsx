import "../static/index.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
export default class Head extends Component {
  constructor(props) {
    super(props);
    this.myInput = React.createRef();
  }

  static propsType = {
    //最后一条记录的ID
    lastTodoId: PropTypes.number.isRequired,
    addOne: PropTypes.func.isRequired,
  };

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
    const {lastTodoId,addOne} = this.props;
    if(e.keyCode===13){
      if(!this.myInput.current.value){
        alert("不能为空!");
      }else{
        const todo = {
          id:lastTodoId+1,
          title:this.myInput.current.value,
          finish:false,
        }
        addOne(todo);
        this.myInput.current.value = "";
      }
    }
  }
}
