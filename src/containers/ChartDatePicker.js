import React from 'react';
import { connect } from 'react-redux';
import { getData } from 'actions/index.js';
import DatePicker from 'components/DatePicker';
import Moment from 'moment-timezone';

const mapStateToProps = (state, props) => {
  return {
    value: props.value
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e) => {
      dispatch(getData(Moment(e.target.value)));
    }
  };
};

const ChartDatePicker = connect(mapStateToProps, mapDispatchToProps)(DatePicker);

export default ChartDatePicker;
