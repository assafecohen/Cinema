import React from 'react';
import style from './Card.css';

const Card = ({imageUrl}) => {
  return (
    <div>
       <h2> Assaf </h2>
       <img className={style.image} src={imageUrl}/>
    </div>
  );
};

export default Card;