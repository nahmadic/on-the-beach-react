import React from 'react';

import styles from './Filters.module.css';

function Filters ({ airports, currentAirport, departureDates, currentDepartureDate, filterDestinations }) {
  const uniqueAirports = [...new Set(airports)];
  const uniqueDepartureDates = [...new Set(departureDates)];

  return (
    <div className={styles.filters}>
      <form>
        <select onChange={(e) => filterDestinations(e.target.value, currentDepartureDate)} value={currentAirport}>
          <option value="any">-- Any --</option>
          {uniqueAirports.map(airport => {
            return <option key={airport} value={airport}>{airport}</option>
          })}
        </select>
        <select onChange={(e) => filterDestinations(currentAirport, e.target.value)} value={currentDepartureDate}>
          <option value="any">-- Any --</option>
          {uniqueDepartureDates.map(date => {
            return <option key={date} value={date}>{date}</option>
          })}
        </select>
      </form>
    </div>
  );
}

export default Filters;
