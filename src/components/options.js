import React, { Component } from 'react';

export default class Options extends Component {
  constructor(props){
    super(props);
    this.state = { option: 'tags'};
    this.props.selectedOption(this.state.option);
  }

  handleChange(event){
    this.props.selectedOption(event.target.value);
  }

  render(){
    console.log(this.state.option);
    return(
      <div>
        <select onChange={this.handleChange.bind(this)}>
          <option value="tags">Tags</option>
          <option value="media">Media</option>
        </select>
      </div>
    )
  }
}