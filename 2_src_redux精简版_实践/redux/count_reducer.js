/*
	1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
*/

// const initState = { count: 100 }; //初始化状态
// export default function countReducer(preState = initState, action) {
  export default function countReducer(preState = { count: 100 } , action) {
  // export default function countReducer(preState , action) {
  console.log('countReducer preState - action:', preState,' - ',action);
  console.log('----------')
  //从action对象中获取：type、data
  const { type, data } = action;
  //根据type决定如何加工数据
  switch (type) {
    case 'increment': //如果是加
      preState.count += data;
      return preState;
    case 'decrement': //若果是减
      preState.count -= data;
      return preState;
    default:
      return preState;
  }
}
