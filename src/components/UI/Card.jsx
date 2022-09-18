import React from 'react';
import './Card.css';

const Card = props => {
  return <div className='card__cover'>{props.children}</div>;
};

export default Card;
