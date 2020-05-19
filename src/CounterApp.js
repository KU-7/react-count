import React from 'react';
import styled from 'styled-components';


class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    //インスタンスの作成
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    //↓↓↓デフォルトのオブジェクト
    this.state = {
      count: 0
    }
  }
  //イベントに基づいた状態の変更
  handleAddOne() {
    this.setState((liveState) => {
      return {
        count: liveState.count + 1
      }
    });
  }
  handleReset() {
    this.setState((liveState) => {
      return {
        count: 0
      }
    });
  }
  handleMinusOne() {
    this.setState((liveState) => {
      return {
        count: liveState.count - 1
      }
    });
  }


  render() {
    return (
      <ReactApp>
        <h1>Counter App</h1>
        <MySpan><span>{this.state.count}</span><br /></MySpan>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleReset}>Reset</button>
        <button onClick={this.handleMinusOne}>-1</button>
      </ReactApp>
    );
  }
}


///////////////////////
////styled-component///
///////////////////////
const ReactApp = styled.div`
margin: 0 30%;
text-align: center;
color: #00b8ff;
background-color: black;
`

const MySpan = styled.span`
font-size: 50px;
`



export default CounterApp;