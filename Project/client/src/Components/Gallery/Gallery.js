import React, { Component } from 'react';
import style from './Gallery.css';
import Card from './Card/Card'

const Gallery = ({ data, onClick }) => {

  let Cards = data.map(x => <Card key={x.id} imageUrl={x.imageUrl} movieId={x.movieId} onClick={onClick} />);
  return (
    <div className={`${style.item} ${style.gallery_container}`}>
      {Cards}
    </div>
  );
}


export default Gallery;
