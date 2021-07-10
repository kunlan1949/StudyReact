import {DEL_TODO_ITEM} from './actionTypes';

//删除Item的方法
export const getDelItemAction =(todoId)=>({
    // 给每个方法规定一个类型，增强代码健壮性。
    type:DEL_TODO_ITEM,todoId
});