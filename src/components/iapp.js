import React, { Component } from 'react';
import Search from './search_bar';

export default class Iapp extends Component {
  constructor(props) {
    super(props);
    this.state = { login: false, users: [] }

  }

  fetchData(term){
    fetch(`https://api.instagram.com/v1/users/search?q=${term}&${localStorage.token}`)
      .then(response => response.json())
      .then(response => this.setState({ users: response.data}))
  }

  componentDidMount(){
    if(localStorage.token !== "undefined")
      this.setState({ login: true })
  }
  componentDidUpdate() {
    console.log(this.state.users);
  }

  onSearchSubmit(term){
    console.log("inside onSearchSubmit()");
    this.fetchData(term);
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
          <Search onSearchSubmit = {this.onSearchSubmit.bind(this)} />
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
