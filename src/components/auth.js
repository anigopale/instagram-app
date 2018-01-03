import React, { Component } from 'react';
import { REDIRECT_URL } from '../assets/urls';
import { CLIENT_ID } from '../assets/client_id';
import './style/auth.css';

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
            <button className="button-logout">Log out</button>
          </a>
        </div>
      );
    }
    return (
      <div>
        <a href={`https://api.instagram.com/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=token&scope=basic+public_content`}>
          <button className="button-login">Login</button>
        </a>
      </div>
    )
  }

  render() {
    return (
      <div className="auth-container">
        {this.renderButtons()}
      </div>

    );
  }
}
