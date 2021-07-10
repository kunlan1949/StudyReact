import React, { Component } from 'react';
import {createStore} from 'redux';
import reducer from './reducer'
//store 作为状态追踪者，跟踪数据变化
const store =createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;