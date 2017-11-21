import React from 'react';
import style from './Card.css';

const Card = ({imageUrl}) => {
  return (
    <div className={style.gallery_item}>
       <img className={style.image} src={imageUrl}/>
    </div>
  );
};

export default Card;