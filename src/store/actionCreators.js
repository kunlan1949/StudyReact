import { getTodoList } from "../net/request";
import {
  DEL_TODO_ITEM,
  CHANGE_TODO_ITEM,
  ADD_TODO_ITEM,
  DEL_CHECK_TODO,
  ALL_CHECK_TODO,
  ALL_TODO_ITEM,
} from "./actionTypes";
import store from "./store";
//删除Item的方法
export const getDelItemAction = (todoId) => ({
  // 给每个方法规定一个类型，增强代码健壮性。
  type: DEL_TODO_ITEM,
  todoId,
});

//选中Item的方法
export const getChangeItemFinishedAction = (todoId, isFinished) => ({
  // 给每个方法规定一个类型，增强代码健壮性。
  type: CHANGE_TODO_ITEM,
  todoId,
  isFinished,
});

//选中Item的方法
export const getAddItemAction = (todo) => ({
  // 给每个方法规定一个类型，增强代码健壮性。
  type: ADD_TODO_ITEM,
  todo,
});

//更新总数、选中数量的方法
export const getDelCheckTodoAction = () => ({
  // 给每个方法规定一个类型，增强代码健壮性。
  type: DEL_CHECK_TODO,
});

//全选checkbox的方法
export const getAllCheckAction = () => ({
  // 给每个方法规定一个类型，增强代码健壮性。
  type: ALL_CHECK_TODO,
});

//更新
// export const getAllItemAction = (todos) => ({
//   // 给每个方法规定一个类型，增强代码健壮性。
//   type: ALL_TODO_ITEM,
//   todos,
// });

export const getAllItemAction = ()=>{
    return (dispatch)=>{
        getTodoList().then((res)=>{
            console.log(res);
            if(res.Code===1){
                const todos = res.Data.TodoList;
                store.dispatch({
                    type:ALL_TODO_ITEM,
                    todos:todos
                })
            }
        });
    }
  };