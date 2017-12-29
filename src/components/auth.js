import React, { Component } from 'react';
import { REDIRECT_URL } from '../assets/urls';
import { CLIENT_ID } from '../assets/client_id';

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
          <a href={REDIRECT_URL}>
            <button>Log out</button>
          </a>
        </div>
      );
    }
    return (
      <div>
        <a href={`https://api.instagram.com/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=token&scope=basic+public_content`}>
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
