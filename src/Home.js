import React from 'react';
import './App.css';
import logo from './logo.svg';

class Home extends React.Component {
  render() {
    return (
        
    <div className="App">
        <h1>Hello, {this.props.name} Welcome to Home</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          For more inquiry please
        </p>
        <a
          className="App-link"
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to google
        </a>
      </header>
    </div>
        
        );
  }
}

  export default Home;