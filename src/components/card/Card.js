import React, { useState } from 'react';

import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Card.module.css';

function Card ({ title, location, image, rating, guests, length, departure, price, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  let accordionClass = styles.bottom;
  if (isOpen) accordionClass = styles.bottomopen;

  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <div className={styles.image}>
          <img src={require(`../../assets/${image}`)} alt={title}/>
          <div className={styles.readmore} onClick={handleClick}>
            <span>
              <strong>{isOpen ? 'Read less' : 'Read more'}</strong> about this hotel 
            </span>
            <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronRight} />
          </div>
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
            <span className={styles.price}>£{price.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <div className={accordionClass}>
        <div className={styles.bottomcontent}>
          <h4>Overview</h4>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;