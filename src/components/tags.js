import React, { Component } from 'react';
import './style/tags.css';

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
    else if(this.props.term === ""){
      return <div>Results will be shown here</div>
    }

    return this.props.tags.map((tag) => {
      if(tag.media_count%2 == 0)
      return <div className="grid-item grid-item--height2">#{tag.name}</div>
      else {
        return <div className="grid-item">#{tag.name}</div>
      }
    })
  }

  render(){
    return(
      <div className="grid">
        {this.renderTagItems()}
      </div>
    )
  }
}
