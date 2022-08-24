import React, { Component } from 'react';
// import store from './redux/store';
import Count from './components/Count';

export default class App extends Component {

  // componentDidMount() {
  //   //检测redux中状态的变化，只要变化，就调用render
  //   store.subscribe(() => {
  //     console.log('store.subscribe 执行 ...');
  //     this.setState({}); //setState空对象调render函数
  //   });
  // }

  render() {
    return (
      <div>
        <Count />
      </div>
    );
  }
}
