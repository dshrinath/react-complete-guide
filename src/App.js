import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //       {/* <img src={logo} className="App-logo" alt="logo" />            */}
    //     <h1>Hi, This is React App..! </h1>
    //   </div>
    // );
    return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi, I \'m a React App!!!!') );
  }
}

export default App;
