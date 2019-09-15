import React from 'react';

function Sort ({ currentSort, options }) {
  return (
    <div className="Sort">
      {options.map(option => {
        let btnClass = [
          'button',
          option.name == currentSort ? 'button-active' : ''
        ];

        btnClass = btnClass.join(' ');

        return <div className={btnClass}>{option.text}</div>
      })}
    </div>
  );
}

export default Sort;
