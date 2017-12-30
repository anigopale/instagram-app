import React, { Component } from 'react';

export default class Tags extends Component{
  renderTagItems(){
    if(!this.props.tags || this.props.tags.length == 0) {
      return <div>Results will be showed here</div>
    }
    return this.props.tags.map((tag) => {
      return <li>{tag.name}</li>
    })
  }

  render(){
    console.log("tags received by Tags component",this.props.tags);
    return(
      <ul>
        tags component
        {this.renderTagItems()}
      </ul>
    )
  }
}
