import React, { Component } from 'react';
import logo from './logo.svg';
import {Calendar } from 'quant-ui'
import './App.less';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div style =  {{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
            <Calendar width={500} fullscreen={false}/>
        </div>
      </div>
    );
  }
}
export default App;