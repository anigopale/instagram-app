import React, { Component } from 'react';
import './style/media.css';

export default class Media extends Component{

  renderMediaItems(){
    if((!this.props.media || this.props.media.length == 0)){
      if(this.props.term && this.props.term !== ""){
        return <div>No media found</div>
      }
      else {
        return <div>Results will be shown here</div>
      }
    }
    else if(this.props.term === ""){
      return <div>Results will be shown here</div>
    }

    return this.props.media.map((item) => {
      return (
        <div className="grid-media-item">
          <img src={item.images.standard_resolution.url} />
        </div>
      )
    })
  }


  render(){
    return(
      <div className="grid-media">
        {this.renderMediaItems()}
      </div>
    )
  }
}
