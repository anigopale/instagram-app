import React, { Component } from 'react';

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
    return this.props.media.map((item) => {
      return (
        <li>
          <img src={item.images.standard_resolution.url} />
        </li>
      )
    })
  }


  render(){
    return(
      <ul>
        {this.renderMediaItems()}
      </ul>
    )
  }
}
