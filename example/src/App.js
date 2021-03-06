import React from 'react'
import logo from './logo.svg';
import './App.css';
import MatrixExample from './MatrixExample';
import TreeExample from './TreeExample';
import FilterExample from './FilterExample';

const App = () => {
  return (
    <div className="App">
    <header className="App-header">
      <center>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">React Table</h1>
      </center>
    </header>
    <a href="https://github.com/vinils/react-table">
      <img style={{position: 'absolute', top: 0, left: 0, border: 0}} src="https://camo.githubusercontent.com/567c3a48d796e2fc06ea80409cc9dd82bf714434/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png"/>
    </a>
    <br/>
    <center>
     <div>
       <MatrixExample/>
       <br/>
       <TreeExample/>
       <br/>
       <FilterExample/>
      </div>
    </center>
  </div>
  );
}

export default App
