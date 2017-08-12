import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: ''
    };
  }
  async componentDidMount() {
    const { data } = await axios.get('http://localhost:3001/hello-world');
    const { message = '' } = data;
    this.setState(() => ({ message }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {this.state.message}
        </p>
      </div>
    );
  }
}

export default App;
