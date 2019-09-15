import React from 'react';

import { faSortAlphaDown, faPoundSign, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './sort.css';

function Sort ({ currentSort, options, sortBy }) {
  console.log(options);
  return (
    <div className='button-container'>
      {options.map(option => {
        let btnClass = [
          'button',
          option.name === currentSort ? 'button-active' : ''
        ];
        btnClass = btnClass.join(' ');

        return (
          <div key={option.name} className={btnClass} onClick={() => sortBy(option.name)}>
            <span className='button-text'>
              sort {option.name !== 'alphabetically' ? 'by ' : ' '}<strong>{option.name}</strong>
            </span>
            <FontAwesomeIcon className='button-icon' icon={option.icon === 'alpha' ? faSortAlphaDown : option.icon === 'pound' ? faPoundSign : faStar } />
          </div>
        )
      })}
    </div>
  );
}

export default Sort;
