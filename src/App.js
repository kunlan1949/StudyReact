import { Component } from "react";
import "./static/index.css";
import Head from "./components/Head";
import List from "./components/List";
import Foot from "./components/Foot";

import store from './store/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: "杀白鲢的🐎",
          finish: false,
        },
        {
          id: 2,
          title: "杀白鲢的🐎🐎",
          finish: false,
        },
        {
          id: 3,
          title: "杀白鲢的🐎🐎🐎",
          finish: false,
        },
        {
          id: 4,
          title: "杀白鲢的🐎🐎🐎🐎",
          finish: false,
        },
      ],
      finishedCount: 0,
      optionsNum: 4,
      allCheck: false,
    };
  }

  _changefinishedList = (todoId, isFinish) => {
    const changeTodos = this.state.todos;
    let finishFlag = 0;
    //更新数据
    console.log(todoId);
    changeTodos.forEach((todo, index) => {
      if (todoId === todo.id) {
        todo.finish = isFinish;
      }
      if (todo.finish) {
        finishFlag += 1;
      }
    });
    //更新状态
    this.setState({
      todos: changeTodos,
      finishedCount: finishFlag,
    });
  };

  _removeTodoById = (todoId) => {
    const tempTodos = this.state.todos;
    let num = this.state.optionsNum;
    let finishFlag = 0;
    console.log(todoId);
    tempTodos.forEach((todo, index) => {
      if (todoId === todo.id) {
        tempTodos.splice(index, 1);
        num -= 1;
      }
    });
    //遍历更新选中数量
    tempTodos.forEach((todo, index) => {
      if (todo.finish) {
        finishFlag += 1;
      }
    });
    //更新状态
    this.setState({
      todos: tempTodos,
      finishedCount: finishFlag,
      optionsNum: num,
    });
  };

  //todo为待添加的新内容
  _addOne = (todo) => {
    let num = this.state.optionsNum;
    //取出当前数组内容
    let tempTodos = this.state.todos;
    //将内容添加至数组尾部
    tempTodos.push(todo);
    num += 1;
    this.setState({
      todos: tempTodos,
      optionsNum: num,
    });
  };

  _delCheckedTodo = () => {
    //取出当前数组内容
    let tempTodos = this.state.todos;
    let tempArr = [];
    tempTodos.forEach((todo, index) => {
      //排查出未选择的item并进行存储
      if (!todo.finish) {
        tempArr.push(todo);
      }
    });

    this.setState({
      todos: tempArr,
      finishedCount: 0,
      optionsNum:tempArr.length,
      allCheck:false
    });
  };

  _allCheckChange = () => {
    const todoList = this.state.todos;
    let fCount = this.state.finishedCount;
    let allCheck = this.state.allCheck;
    let check = false;
    allCheck = !allCheck;
    if (allCheck) {
      fCount = todoList.length;
      check = true;
    } else {
      fCount = 0;
      check = false;
    }
    todoList.forEach((todo, index) => {
      todo.finish = check;
    });
   
    this.setState({
      allCheck: allCheck,
      todos: todoList,
      finishedCount:fCount
    });
  };

  render() {
    const { todos, finishedCount, optionsNum, allCheck } = this.state;
    return (
      <div id="root">
        <div class="todo-box">
          <div class="todo-title">
            <span>任务：杀白鲢🐎</span>
          </div>
          <div class="todo-container">
            <div class="todo-wrap">
              {/* //获取item项的最后一项的id */}
              <Head
                lastTodoId={todos.length === 0 ? 0 : todos[todos.length - 1].id}
                addOne={this._addOne}
              />
              <List
                todos={todos}
                removeTodoById={this._removeTodoById}
                changefinishedList={this._changefinishedList}
              />
              <Foot
                optionsNum={optionsNum}
                finishedCount={finishedCount}
                delCheckedTodo={this._delCheckedTodo}
                allCheck={allCheck}
                allCheckChange={this._allCheckChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
