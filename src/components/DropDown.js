import React from 'react';
import PropTypes from 'prop-types';
import './dropDown.scss';

const DropDown = ({ options, onSelect }) => (
  <select
    className="dropdown"
    onChange={onSelect}
    disabled={options.length === 0}
  >
    {options.map((option) => {
      return <option
        value={option.id}
        key={option.id}
      >
        {option.name}
      </option>
    })}
  </select>
);

DropDown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired
};

export default DropDown;
