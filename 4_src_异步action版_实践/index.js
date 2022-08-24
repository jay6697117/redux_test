import React from 'react'; //React核心
import ReactDOM from 'react-dom'; //React DOM 库
import App from './App'; //App根组件
import store from './redux/store'; //引入 redux store

// ReactDOM render
ReactDOM.render(<App />, document.getElementById('root'));

// 监听redux数据变化 重新render
store.subscribe(() => {
  console.log('监听redux数据变化 重新render 执行了～～～');
  ReactDOM.render(<App />, document.getElementById('root'));
});
