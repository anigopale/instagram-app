import React, { Component } from 'react';
import Search from './search_bar';
import Tags from './tags';
import Options from './options';
import Media from './media';
import { TAGS_URL, MEDIA_URL } from '../assets/urls';
import './style/iapp.css';

export default class Iapp extends Component {
  constructor(props) {
    super(props);
    this.state = { login: false, tags: [], option: "tag", media: [] };
  }

  fetchData(term){
    if(this.state.option === "media"){
      fetch(`${MEDIA_URL[0]}${term}${MEDIA_URL[1]}?${localStorage.token}`)
        .then(response => response.json())
        .then(response => this.setState({ media: response.data }));
    }
    else {
      fetch(`${TAGS_URL}?q=${term}&${localStorage.token}`)
        .then(response => response.json())
        .then(response => this.setState({ tags: response.data }));
    }
  }


  componentDidMount(){
    if(localStorage.token !== "undefined")
      this.setState({ login: true })
  }
  componentDidUpdate() {
    console.log("inside iapp component:",this.state.tags);
    console.log("",this.state.media);
  }

  onSearchSubmit(term){
    console.log("inside onSearchSubmit()");
    this.fetchData(term);
  }

  renderSearchResults(){
    if(this.state.option === "media")
      return <Media media={this.state.media} />;
    else
      return <Tags tags={this.state.tags} />;
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
          {this.renderSearchResults()}
        </div>
      )
    }
  }

  render(){
    return(
      <div className="iapp-container">
        inside I-App component
        {this.renderComponent()}
      </div>
    );
  }
}
