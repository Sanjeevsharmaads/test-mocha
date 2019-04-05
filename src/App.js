import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App" style={{color:"red"}}>
       <h1>Hello World Sharma</h1>
       <input id='checked' defaultChecked />
        <ul>
          <li>Men</li>
          <li>Women</li>
        </ul>
         
      </div>
    );
  }
}

export default App;
