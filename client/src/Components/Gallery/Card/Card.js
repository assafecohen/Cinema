import React from 'react';
import style from './Card.css';

const Card = ({ title, imageUrl, movieId, selected, onClick }) => {
  return (
    <div className={style.gallery_item} onClick={() => onClick(movieId)}>
      <div className={style.image} style={{ backgroundImage: 'url(' + imageUrl + ')' }} />
      <h3 className={style.title}>{title}</h3>
    </div>
  );
};

export default Card;


