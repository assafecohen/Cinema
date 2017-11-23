import React from 'react';
import style from './Card.css';

const Card = ({imageUrl}) => {
  return (
    <div className={style.gallery_item}>
      <div className={style.image}  style = {{backgroundImage: 'url(' + imageUrl + ')'}}/>
    </div>
  );
};

export default Card;


  