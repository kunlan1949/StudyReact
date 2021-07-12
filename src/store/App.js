import { Component } from "react";
import "./static/index.css";
import Head from "./components/Head";
import List from "./components/List";
import Foot from "./components/Foot";

import store from './store';

import {getAllItemAction} from './actionCreators';
class App extends Component {
  // constructor(props) {
  //   super(props);
    
  // }


  // async _requestTodoList(){
  //   const result= await getTodoList();
  //   if(result.Code === 1){
  //     const action = getAllItemAction(result.Data.TodoList);
  //     store.dispatch(action);
  //   }
  // }

  componentDidMount(){
    // this._requestTodoList();
    const action = getAllItemAction();
    store.dispatch(action);
  }

  // _allCheckChange = () => {
  //   const todoList = this.state.todos;
  //   let fCount = this.state.finishedCount;
  //   let allCheck = this.state.allCheck;
  //   let check = false;
  //   allCheck = !allCheck;
  //   if (allCheck) {
  //     fCount = todoList.length;
  //     check = true;
  //   } else {
  //     fCount = 0;
  //     check = false;
  //   }
  //   todoList.forEach((todo, index) => {
  //     todo.finish = check;
  //   });
   
  //   this.setState({
  //     allCheck: allCheck,
  //     todos: todoList,
  //     finishedCount:fCount
  //   });
  // };

  render() {
    return (
      <div id="root">
        <div className="todo-box">
          <div className="todo-title">
            <span>任务：杀白鲢🐎</span>
          </div>
          <div className="todo-container">
            <div className="todo-wrap">
              <Head />
              <List />
              <Foot />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
