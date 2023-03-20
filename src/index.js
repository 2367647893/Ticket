import React from 'react'
import ReactDOM from 'react-dom'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      errorInfo: null 
    };
  }
  
  static getDerivedStateFromError (error) {
    console.log(error, 'error2222222');
    // 更新 state 使下一次渲染可以显示降级 UI
    return { errorInfo: true }
  }

  // 报错
  componentDidCatch(error, errorInfo) {
    // 请求后台接口 把错误上报
    console.log(errorInfo, 'errorInfo');
    console.log(error, 'error');
  }
  
  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          错误替代展示
        </div>
      );
    }
    return this.props.children;
  }  
}

class BuggyCounter extends React.Component {
  render () {
    if (1) {
      throw new Error('I crashed!');
    }
    return <h1>练习</h1>;
  }
}

function App() {
  return (
    <ErrorBoundary>               
      <BuggyCounter />
    </ErrorBoundary>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)



