import React from 'react';

import styles from './Card.module.css';

function Card ({ title, location, image, stars, guests, length, departure, price, description }) {

  return (
    <article className={styles.card}>
      <div className="card-top">
        <div className="card-image">
          <img src={require(`../../assets/${image}`)} alt="holiday image 1"/>
          <div className="card-read-more">
            <a href="#">Read more about this hotel</a>
          </div>
        </div>
        <div className="card-info">
          <h2 className="card-title">{title}</h2>
          <h3 className="card-location">{location}</h3>
          <div className="card-stars">{stars}</div>
          <p className="card-guests">{guests}</p>
          <p className="card-length">{length}</p>
          <p className="card-departure">departing from {departure}</p>
          <div className="button">book now £{price}</div>
        </div>
      </div>
      <div className="card-bottom">
        <h4>Overview</h4>
        <p className="card-description">{description}</p>
      </div>
    </article>
  );
}

export default Card;