import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          REACT V1
        </p>
        <p>
				Version {process.env.REACT_APP_VERSION? process.env.REACT_APP_VERSION: '0.0.0' }
				</p>
        </header>
    </div>
  );
}

export default App;
