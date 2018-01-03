import React, { Component } from 'react';

export default class Tags extends Component{
  renderTagItems(){
    if((!this.props.tags || this.props.tags.length == 0)){
      if(this.props.term && this.props.term !== ""){
        return <div>No tags found</div>
      }
      else {
        return <div>Results will be shown here</div>
      }
    }

    return this.props.tags.map((tag) => {
      return <li>{tag.name}</li>
    })
  }

  render(){
    return(
      <ul>
        tags component
        {this.renderTagItems()}
      </ul>
    )
  }
}
