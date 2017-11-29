import React from 'react';
import style from './Card.css';

const Card = ({ imageUrl, movieId, selected, onClick7 }) => {
  return (
    <div className={style.gallery_item} onClick={() => onClick7(movieId)}>
      <div className={style.image} style={{ backgroundImage: 'url(' + imageUrl + ')' }} />
    </div>
  );
};

export default Card;


