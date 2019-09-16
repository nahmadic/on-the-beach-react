import React from 'react';

import styles from './Filters.module.css';

function Filters ({ airports, departureDates }) {
  const uniqueAirports = [...new Set(airports)];
  const uniqueDepartureDates = [...new Set(departureDates)];

  return (
    <div className={styles.filters}>
      <form>
        <select name="" id="">
          <option value="">-- Any --</option>
          {uniqueAirports.map(airport => {
            return <option key={airport} value={airport}>{airport}</option>
          })}
        </select>
        <select name="" id="">
          <option value="">-- Any --</option>
          {uniqueDepartureDates.map(date => {
            return <option key={date} value={date}>{date}</option>
          })}
        </select>
      </form>
    </div>
  );
}

export default Filters;
