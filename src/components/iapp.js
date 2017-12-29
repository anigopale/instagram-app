import React, { Component } from 'react';
import Search from './search_bar';
import Tags from './tags';
import { TAGS_URL } from '../assets/urls';

export default class Iapp extends Component {
  constructor(props) {
    super(props);
    this.state = { login: false, tags: [] };
  }

  fetchData(term){
    fetch(`${TAGS_URL}?q=${term}&${localStorage.token}`)
      .then(response => response.json())
      .then(response => this.setState({ tags: response.data}));
  }

  componentDidMount(){
    if(localStorage.token !== "undefined")
      this.setState({ login: true })
  }
  componentDidUpdate() {
    console.log(this.state.tags);
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
          <Tags />
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
