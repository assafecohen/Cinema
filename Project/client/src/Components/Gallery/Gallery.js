import React, { Component } from 'react';
import style from './Gallery.css';
import Card from './Card/Card'

const Gallery = ({ data, onClick7 }) => {

  let Cards = data.map(x => <Card key={x.id} imageUrl={x.imageUrl} movieId={x.movieId} onClick7={onClick7} />);
  return (
    <div className={`${style.item} ${style.gallery_container}`}>
      {Cards}
    </div>
  );
}


export default Gallery;
