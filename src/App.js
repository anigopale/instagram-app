import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './components/auth';
import Iapp from './components/iapp';

class App extends Component {


  render() {

      return (
      <div className="app-container">
        <h1>InstaApp</h1>
        <Auth />
        <Iapp />
      </div>
    );
  }
}

export default App;
