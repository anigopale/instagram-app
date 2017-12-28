import React, { Component } from 'react';

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
