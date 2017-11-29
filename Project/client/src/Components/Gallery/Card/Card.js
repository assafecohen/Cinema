import React from 'react';
import style from './Card.css';

const Card = ({ imageUrl, movieId, selected, onClick }) => {
  return (
    <div className={style.gallery_item} onClick={() => onClick(movieId)}>
      <div className={style.image} style={{ backgroundImage: 'url(' + imageUrl + ')' }} />
    </div>
  );
};

export default Card;


