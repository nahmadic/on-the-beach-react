import React from 'react';

import styles from './Card.module.css';

function Card ({ title, location, image, rating, guests, length, departure, price, description }) {

  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <div className={styles.image}>
          <img src={require(`../../assets/${image}`)} alt="holiday image 1"/>
          <div className={styles.readmore}>Read more about this hotel</div>
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>{title}</h2>
          <h3 className={styles.location}>{location}</h3>
          <div className={styles.stars}>{rating}</div>
          <p className={styles.guests}>{guests}</p>
          <p className={styles.length}>{length}</p>
          <p className={styles.departure}>Departing from <em>{departure}</em></p>
          <div className={styles.button}>
            Book now <br/>
            <span className={styles.price}>£{price}</span>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <h4>Overview</h4>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
}

export default Card;