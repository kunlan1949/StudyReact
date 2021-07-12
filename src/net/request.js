import ajax from './ajax'

const BASE_URL ='http://localhost:1866/';

export const getTodoList =()=>ajax(BASE_URL+'api/Shop/getTodoList');
