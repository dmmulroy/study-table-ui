import React, { Component } from 'react';
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
      <section className="section">
        <div className="container">
          <h1 className="title">
            {this.state.message}
          </h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
        </div>
      </section>
    );
  }
}

export default App;
