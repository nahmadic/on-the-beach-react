import React, { useState } from 'react';

import styles from './Container.module.css';
import Card from '../card/Card.js';
import Sort from '../sort/Sort';

function Container () {
  const [destinations, setDestinations] = useState([
    {
      title: "Iberostar Grand Salome",
      location: "Costa Adeje, Tenerife",
      image: "hotel-image-1.png",
      stars: 5,
      guests: "2 Adults, 2 Children & 1 Infant",
      length: "3rd July 2019 for 7 days",
      departure: "East Midlands",
      price: 1136.50,
      description: "The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Gold courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea."
    },
    {
      title: "Aguamarina Golf Hotel",
      location: "Costa Adeje, Tenerife",
      image: "hotel-image-2.png",
      stars: 4,
      guests: "2 Adults, 1 Child",
      length: "27th May 2019 for 7 days",
      departure: "Liverpool",
      price: 696.80,
      description: "The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Gold courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea."
    },
    {
      title: "Las Piramides Resort",
      location: "Costa Adeje, Tenerife",
      image: "hotel-image-3.png",
      stars: 3,
      guests: "2 Adults, 2 Children",
      length: "3rd July 2019 for 7 days",
      departure: "Manchester",
      price: 499.99,
      description: "The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Gold courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea."
    },
  ]);

  const [sortOptions, setSortOptions] = useState({
    currentSort: 'price',
    options: [
      {
        name: 'alphabetically',
        text: `sort <em>alphabetically</em>`,
        image: 'alpha-icon.png'
      },
      {
        name: 'price',
        text: `sort by <em>price</em>`,
        image: 'price-icon.png'
      },
      {
        name: 'rating',
        text: `sort by <em>star rating</em>`,
        image: 'rating-icon.png'
      },
    ]
  });

  const destinationCards = destinations.map(destination => {
      return (
        <Card
          title={destination.title}
          location={destination.location}
          image={destination.image}
          stars={destination.stars}
          guests={destination.guests}
          length={destination.length}
          departure={destination.departure}
          price={destination.price}
          description={destination.description}
        />
      )
  });

  return (
    <div className={styles.container}>
      <aside>
        <Sort 
          currentSort={sortOptions.currentSort}
          options={sortOptions.options}
        />
      </aside>
      <main>
        {destinationCards}
      </main>
    </div>
  );
}

export default Container;
