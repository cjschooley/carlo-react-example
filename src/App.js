import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  env() {
    // Call the function that was exposed in Node.
    window.env().then((data) => {
      console.log(data);
      for (const type in data) {
        console.log(`${type}: ${data[type]}`);
      }
    });
  }

  render() {
    this.env()
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
