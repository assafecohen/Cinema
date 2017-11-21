import React, { Component } from 'react';
import style from './Gallery.css';
import Card from './Card/Card'

class Gallery extends Component {

  render() {
     let {data} = this.props;
     let Cards= data.map(x => <Card key={x.id} imageUrl={x.imageUrl}/>); 

    return (
      <div className={`${style.item} ${style.gallery_container}`}>
        {Cards}   
      </div>
    );
  }
}

export default Gallery;
