import React, { Component } from 'react';

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = { token: window.location.href.split('#')[1], loggedin: false }
  }
  componentDidMount() {
    localStorage.setItem( 'token', this.state.token );
    if(this.state.token) {
      this.setState({ loggedin: true });
    }
  }

  renderButtons() {
    if( this.state.loggedin )
    {
      return (
        <div>
          <a href="http://localhost:3000">
            <button>Log out</button>
          </a>
        </div>
      );
    }
    return (
      <div>
        <a href="https://api.instagram.com/oauth/authorize/?client_id=5ad51dbdb79e43ca82a3e3c419c8a967&redirect_uri=http://localhost:3000&response_type=token&scope=basic+public_content">
          <button>Login</button>
        </a>
      </div>
    )
  }

  render() {
    console.log(localStorage);
    return (
      <div>
        auth component
        {this.renderButtons()}
      </div>

    );
  }
}
