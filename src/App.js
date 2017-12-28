import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './components/auth';
import Iapp from './components/iapp';

class App extends Component {


  render() {

      return (
      <div>
        <Auth loginStatus = {status => {console.log("login status:", status)}} />
        <Iapp />
      </div>
    );
  }
}

export default App;
