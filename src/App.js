import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './components/auth';

class App extends Component {


  onbuttonClick() {

  }

  render() {

    console.log(this.state);
    return (
      <div>
        <Auth/>
        
      </div>
    );
  }
}

export default App;
