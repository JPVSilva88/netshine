import React from 'react';
import PropTypes from 'prop-types';
import './datePicker.scss';

const DatePicker = ({ onChange, value }) => (
  <input
    type="date"
    className="datepicker"
    onChange={onChange}
    value={value}
  />
);

DatePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default DatePicker;
