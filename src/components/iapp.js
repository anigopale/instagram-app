import React, { Component } from 'react';
import Search from './search_bar';

export default class Iapp extends Component {
  constructor(props) {
    super(props);
    this.state = { login: false }
  }

  componentDidMount(){
    if(localStorage.token !== "undefined")
      this.setState({ login: true })
  }

  renderComponent() {
    if(!this.state.login) {
      return (
        <div>You must be logged in</div>
      );
    }
    else {
      return (
        <div>
          <Search onSearchSubmit = {(term) => console.log("term reached to <Iapp />": term)} />
        </div>
      )
    }
  }

  render(){
    return(
      <div>
        inside I-App component
        {this.renderComponent()}
      </div>
    );
  }
}
