import React, { Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" }
  }
  onInputChange(event) {
    console.log(event.target.value);
    this.setState( { term: event.target.value });
  }
  onFormSubmit() {
    this.props.onSearchSubmit(this.state.term)
  }

  render(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <input
            value={this.state.term}
            onChange={this.onInputChange.bind(this)}
            />
        </form>
      </div>
    )
  }
}
