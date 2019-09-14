import React, { useState } from 'react';

import styles from './Container.module.css';

function Container() {
  const [destinations, setDestinations] = useState([
    {
      title: "Iberostar Grand Salome",
      location: "Costa Adeje, Tenerife",
      image: "../../assets/hotel-image-1.png",
      stars: 5,
      guests: "2 Adults, 2 Children & 1 Infant",
      length: "3rd July 2019 for 7 days",
      departure: "East Midlands",
      price: 1136.50,
      descriptions: "The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Gold courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea."
    },
    {
      title: "Aguamarina Golf Hotel",
      location: "Costa Adeje, Tenerife",
      image: "../../assets/hotel-image-2.png",
      stars: 4,
      guests: "2 Adults, 1 Child",
      length: "27th May 2019 for 7 days",
      departure: "Liverpool",
      price: 696.80,
      descriptions: "The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Gold courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea."
    },
    {
      title: "Las Piramides Resort",
      location: "Costa Adeje, Tenerife",
      image: "../../assets/hotel-image-3.png",
      stars: 3,
      guests: "2 Adults, 2 Children",
      length: "3rd July 2019 for 7 days",
      departure: "Manchester",
      price: 499.99,
      descriptions: "The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Gold courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea."
    },
  ])

  return (
    <div className={styles.container}>
      <aside>

      </aside>
      <main>
        
      </main>
    </div>
  );
}

export default Container;
