import React, { Component } from 'react';
import './style/search_bar.css';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" }
  }
  onInputChange(event) {
    console.log(event.target.value);
    this.setState( { term: event.target.value });
    this.props.onSearchSubmit(event.target.value)
  }

  placeholder(){
    if(this.props.option === "media")
      return "tagged "
    else
      return ""
  }

  render(){
    return (
      <div className="search-container">
        <input
            type="text"
            value={this.state.term}
            onChange={this.onInputChange.bind(this)}
            placeholder={`search for ${this.placeholder()}${this.props.option}`}
            />
      </div>
    )
  }
}
