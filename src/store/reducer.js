//reduce 作为状态管理者，存储初始化操作
import {
  DEL_TODO_ITEM,
  CHANGE_TODO_ITEM,
  ADD_TODO_ITEM,
  DEL_CHECK_TODO,
  ALL_CHECK_TODO,
  ALL_TODO_ITEM,
} from "./actionTypes";

const defaultState ={
  todos: [],
  finishedCount: 0,
  optionsNum: 4,
  allCheck: false,
};
 // eslint-disable-next-line
export default (state = defaultState, action) => {
  console.log(state, action);
  // getDelItemAction k方法的具体操作
  //通过判断传入的ActionTypeID判断是哪一个Action
  if (action.type === ALL_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.todos = action.todos;
    return newState;
  }
  if (action.type === DEL_TODO_ITEM) {
    // 将数据拷贝一份
    const newState = JSON.parse(JSON.stringify(state));
    // 获取原有数据
    let num = newState.optionsNum;
    let finishFlag = 0;
    //遍历数据以删除被点击了删除按钮的Item
    newState.todos.forEach((todo, index) => {
      if (todo.id === action.todoId) {
        newState.todos.splice(index, 1);
        num -= 1;
      }
    });
    //遍历更新选中数量
    newState.todos.forEach((todo, index) => {
      if (todo.finish) {
        finishFlag += 1;
      }
    });
    //更新状态
    newState.optionsNum = num;
    newState.finishedCount = finishFlag;
    return newState;
  }
  //修改选中数据的方法
  if (action.type === CHANGE_TODO_ITEM) {
    // 将数据拷贝一份
    const newState = JSON.parse(JSON.stringify(state));
    let finishFlag = 0;
    //更新数据
    newState.todos.forEach((todo, index) => {
      if (todo.id === action.todoId) {
        todo.finish = action.isFinished;
      }
      if (todo.finish) {
        finishFlag += 1;
      }
    });
    //更新状态
    newState.finishedCount = finishFlag;
    return newState;
  }
  //添加记录
  if (action.type === ADD_TODO_ITEM) {
    // 将数据拷贝一份
    const newState = JSON.parse(JSON.stringify(state));
    let num = newState.optionsNum;
    //将方法中所添加的item放入当前数组
    newState.todos.push(action.todo);
    num += 1;
    newState.optionsNum = num;
    return newState;
  }

  if (action.type === DEL_CHECK_TODO) {
    // 将数据拷贝一份
    const newState = JSON.parse(JSON.stringify(state));
    var tempArr = [];
    newState.todos.forEach((todo, index) => {
      //排查出未选择的item并进行存储
      if (!todo.finish) {
        tempArr.push(todo);
      }
    });
    newState.todos = tempArr;
    newState.finishedCount = 0;
    newState.optionsNum = tempArr.length;
    newState.allCheck = false;
    return newState;
  }

  if (action.type === ALL_CHECK_TODO) {
    // 将数据拷贝一份
    const newState = JSON.parse(JSON.stringify(state));
    let check = false;
    newState.allCheck = !newState.allCheck;
    if (newState.allCheck) {
      newState.finishedCount = newState.todos.length;
      check = true;
    } else {
      newState.finishedCount = 0;
      check = false;
    }
    newState.todos.forEach((todo, index) => {
      todo.finish = check;
    });

    return newState;
  }
  return state;
};
