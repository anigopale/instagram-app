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
      return <div className="grid-tag-item"><span>#{tag.name}</span></div>
    })
  }

  render(){
    return(
      <div className="grid-tag-wrap">
        <div className="grid-tag">
          {this.renderTagItems()}
        </div>
      </div>
    )
  }
}
