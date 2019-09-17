import React from 'react';

import './filters.css';

function Filters ({ airports, currentAirport, departureDates, currentDepartureDate, filterDestinations }) {
  const uniqueAirports = [...new Set(airports)];
  const uniqueDepartureDates = [...new Set(departureDates)];

  return (
    <div className='filter-container'>
      <form>
        <label htmlFor="airport-filter">Departing from</label>
        <select name="airport-filter" onChange={(e) => filterDestinations(e.target.value, currentDepartureDate)} value={currentAirport}>
          <option value="any">Select airport</option>
          {uniqueAirports.map(airport => {
            return <option key={airport} value={airport}>{airport}</option>
          })}
        </select>
        <label htmlFor="date-filter">Departure date</label>
        <select name="date-filter" onChange={(e) => filterDestinations(currentAirport, e.target.value)} value={currentDepartureDate}>
          <option value="any">Select date</option>
          {uniqueDepartureDates.map(date => {
            return <option key={date} value={date}>{date}</option>
          })}
        </select>
      </form>
    </div>
  );
}

export default Filters;
