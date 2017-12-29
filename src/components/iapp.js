import React, { Component } from 'react';
import Search from './search_bar';
import Tags from './tags';
import Options from './options';
import { TAGS_URL } from '../assets/urls';

export default class Iapp extends Component {
  constructor(props) {
    super(props);
    this.state = { login: false, tags: [], option: "tag" };
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
    console.log("inside iapp component:",this.state.tags);
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
          <Options selectedOption={(option)=>{this.setState({ option })}} />
          <Search onSearchSubmit={this.onSearchSubmit.bind(this)} option={this.state.option} />
          <Tags tags={this.state.tags} />
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
