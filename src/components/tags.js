import React, { Component } from 'react';

export default class Tags extends Component{
  renderTagItems(){
    return this.props.tags.map((tag) => {
      return <li>{tag.name}</li>
    })
  }

  render(){
    console.log("tags received by Tags component",this.props.tags);
    return(
      <ul>
        {this.renderTagItems()}
      </ul>
    )
  }
}
