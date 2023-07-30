import React from 'react';

import './App.css';
import { Component } from 'react';
import Apicalls from './apicalls';

class App extends Component {
  constructor(){
    super();
   
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <h1>Monsters Rolodex</h1>
         <Apicalls/>
        </header>
      </div>
    );
  }

}

export default App;
