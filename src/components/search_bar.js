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

  render(){
    return (
      <div>
        <form onSubmit={()=>{console.log(this.state.term)}}>
          <input type="text" onChange={this.onInputChange.bind(this)} />
        </form>
      </div>
    )
  }
}
