import React, { Component } from 'react';

export default class Media extends Component{

  renderMediaItems(){
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
