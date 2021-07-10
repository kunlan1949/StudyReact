//reduce 作为状态管理者，存储初始化操作
import {DEL_TODO_ITEM} from './actionTypes';

const defaultState = {
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
}

export default(state = defaultState,action)=>
{
    console.log(state,action);
    // getDelItemAction k方法的具体操作
    //通过判断传入的ActionTypeID判断是哪一个Action
    if(action.type===DEL_TODO_ITEM){
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
        newState.finishedCount = finishFlag;
        return newState;
    }
    return state;
}