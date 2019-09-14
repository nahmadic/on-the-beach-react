import React from 'react';

import styles from './Card.module.css';

function Card ({ title, location, image, stars, guests, length, departure, price, description }) {
  return (
    <article>
      <h1>{title}</h1>
      <h2>{location}</h2>
      <h2>{image}</h2>
      <h2>{stars}</h2>
      <h2>{guests}</h2>
      <h2>{length}</h2>
      <h2>{departure}</h2>
      <h2>{price}</h2>
      <h2>{description}</h2>
    </article>
  );
}

export default Card;