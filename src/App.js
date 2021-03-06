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
          title: "æç½é²¢çð",
          finish: false,
        },
        {
          id: 2,
          title: "æç½é²¢çðð",
          finish: false,
        },
        {
          id: 3,
          title: "æç½é²¢çððð",
          finish: false,
        },
        {
          id: 4,
          title: "æç½é²¢çðððð",
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
    //æ´æ°æ°æ®
    console.log(todoId);
    changeTodos.forEach((todo, index) => {
      if (todoId === todo.id) {
        todo.finish = isFinish;
      }
      if (todo.finish) {
        finishFlag += 1;
      }
    });
    //æ´æ°ç¶æ
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
    //éåæ´æ°éä¸­æ°é
    tempTodos.forEach((todo, index) => {
      if (todo.finish) {
        finishFlag += 1;
      }
    });
    //æ´æ°ç¶æ
    this.setState({
      todos: tempTodos,
      finishedCount: finishFlag,
      optionsNum: num,
    });
  };

  //todoä¸ºå¾æ·»å çæ°åå®¹
  _addOne = (todo) => {
    let num = this.state.optionsNum;
    //ååºå½åæ°ç»åå®¹
    let tempTodos = this.state.todos;
    //å°åå®¹æ·»å è³æ°ç»å°¾é¨
    tempTodos.push(todo);
    num += 1;
    this.setState({
      todos: tempTodos,
      optionsNum: num,
    });
  };

  _delCheckedTodo = () => {
    //ååºå½åæ°ç»åå®¹
    let tempTodos = this.state.todos;
    let tempArr = [];
    tempTodos.forEach((todo, index) => {
      //ææ¥åºæªéæ©çitemå¹¶è¿è¡å­å¨
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
            <span>ä»»å¡ï¼æç½é²¢ð</span>
          </div>
          <div class="todo-container">
            <div class="todo-wrap">
              {/* //è·åitemé¡¹çæåä¸é¡¹çid */}
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
