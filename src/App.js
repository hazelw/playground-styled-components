import React from 'react';
import Button from './components/Button';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button text="first button" bgColor="orange" />
        <Button text="second button" bgColor="green" />
      </header>
    </div>
  );
}

export default App;
