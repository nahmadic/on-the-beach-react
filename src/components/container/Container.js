import React, { useState } from 'react';

import styles from './Container.module.css';
import Card from '../card/Card';
import Sort from '../sort/Sort';

function Container () {
  const [destinations, setDestinations] = useState([
    {
      title: "Iberostar Grand Salome",
      location: "Costa Adeje, Tenerife",
      image: "hotel-image-1.png",
      rating: 5,
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
      rating: 4,
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
      rating: 3,
      guests: "2 Adults, 2 Children",
      length: "3rd July 2019 for 7 days",
      departure: "Manchester",
      price: 499.99,
      description: "The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Gold courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea."
    },
  ]);

  const [sortOptions, setSortOptions] = useState({
    currentSort: 'alphabetically',
    options: [
      {
        name: 'alphabetically',
        icon: 'alpha'
      },
      {
        name: 'price',
        icon: 'pound'
      },
      {
        name: 'rating',
        icon: 'star'
      },
    ]
  });

  const sortBy = currentSort => {
    const currentArray = destinations;

    if (currentSort === 'alphabetically') {
      currentArray.sort((a, b) => a.title > b.title ? 1 : -1);
    }

    if (currentSort === 'price') {
      currentArray.sort((a, b) => a.price > b.price ? 1 : -1);
    }

    if (currentSort === 'rating') {
      currentArray.sort((a, b) => a.rating < b.rating ? 1 : -1);
    }

    setDestinations(currentArray);
    setSortOptions({
      ...sortOptions,
      currentSort
    });
  }

  const destinationCards = destinations.map(destination => {
      return (
        <Card
          key={destination.title}
          title={destination.title}
          location={destination.location}
          image={destination.image}
          rating={destination.rating}
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
          sortBy={sortBy}
        />
      </aside>
      <main>
        {destinationCards}
      </main>
    </div>
  );
}

export default Container;
