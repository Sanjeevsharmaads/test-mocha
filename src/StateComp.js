import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class StateComp extends Component {
  constructor(props){
    super(props);
    this.state = {count:0,name:"sanjeev",lastname:"kaushik"};
  }

  increment(){
    this.setState({count:this.state.count+1});
  }

  render() {
    return (
      <div className="mystate" style={{color:"red"}}>
       <h1>Hello User {this.state.name} </h1>
       <input type="text" ref="fname" />
       <p>Count: {this.state.count}</p>
        <button className="increment" onClick={this.increment}>Increment count</button>
      </div>
    );
  }
}

export default StateComp;
