import React, { Component } from 'react'; // React核心和Component类
import Count from './components/Count'; // 引入Count组件

export default class App extends Component {
  render() {
    return (
      <div>
        <Count />
      </div>
    );
  }
}
