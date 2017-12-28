import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './components/auth';

class App extends Component {


  render() {

      return (
      <div>
        <Auth loginStatus = {status => {console.log("login status:", status)}} />
      </div>
    );
  }
}

export default App;
