import React, { useState, useEffect } from 'react';

import styles from './Container.module.css';
import Card from '../card/Card';
import Sort from '../sort/Sort';
import Filters from '../filters/Filters';

const destinationsArray = [
  {
    title: "Iberostar Grand Salome",
    location: "Costa Adeje, Tenerife",
    image: "hotel-image-1.png",
    rating: 5,
    guests: "2 Adults, 2 Children & 1 Infant",
    length: "3rd July 2019 for 7 days",
    departureDate: "3rd July 2019",
    departure: "East Midlands",
    price: 1136.50,
    description: "The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Gold courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea."
  },
  {
    title: "Iberostar Grand Salome 2",
    location: "Costa Adeje, Tenerife",
    image: "hotel-image-1.png",
    rating: 5,
    guests: "2 Adults, 2 Children & 1 Infant",
    length: "3rd July 2019 for 7 days",
    departureDate: "3rd July 2019",
    departure: "Liverpool",
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
    departureDate: "27th May 2019",
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
    departureDate: "3rd July 2019",
    departure: "Manchester",
    price: 499.99,
    description: "The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Gold courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea."
  },
];

const airports = destinationsArray.map(destination => destination.departure);
const departureDates = destinationsArray.map(destination => destination.departureDate);

function Container () {
  const [destinations, setDestinations] = useState([]);
  const [currentAirport, setCurrentAirport] = useState('any');
  const [currentDepartureDate, setCurrentDepartureDate] = useState('any');
  const [sortOptions, setSortOptions] = useState({
    currentSort: 'price',
    options: [
      {
        name: 'price',
        icon: 'pound'
      },
      {
        name: 'alphabetically',
        icon: 'alpha'
      },
      {
        name: 'rating',
        icon: 'star'
      },
    ]
  });

  const sortBy = currentSort => {
    let currentArray = destinations.length ? [...destinations] : [...destinationsArray];

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

  useEffect(() => sortBy('price'), []);

  const filterDestinations = (airport, date) => {
    setCurrentAirport(airport);
    setCurrentDepartureDate(date);

    let filteredArray = [...destinationsArray];

    if (airport !== 'any') {
      filteredArray = filteredArray.filter(item => item.departure === airport);
    }

    if (date !== 'any') {
      filteredArray = filteredArray.filter(item => item.departureDate === date);
    }

    sortBy(sortOptions.currentSort);

    setDestinations(filteredArray);
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
        <Filters
          airports={airports}
          // filterByAirport={filterByAirport}
          currentAirport={currentAirport}
          departureDates={departureDates} 
          // filterByDate={filterByDate}
          currentDepartureDate={currentDepartureDate}
          filterDestinations={filterDestinations}
        />
      </aside>
      <main>
        {destinationCards}
      </main>
    </div>
  );
}

export default Container;
