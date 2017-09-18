import React from 'react';
import { connect } from 'react-redux';
import { selectServer } from 'actions/index.js';
import DropDown from 'components/DropDown';

const mapStateToProps = (state) => {
  return {
    options: state.servers
      ? Object.keys(state.servers).map(serverId => state.servers[serverId])
      : []
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelect: (server) => {
      dispatch(selectServer(server));
    }
  };
};

const mergeProps = (stateProps, dispatchProps) => {
  return Object.assign({}, stateProps, {
    onSelect: (e) => {
      dispatchProps.onSelect(stateProps.options[e.target.selectedIndex]);
    }
  });
};


const ServerDropDown = connect(mapStateToProps, mapDispatchToProps, mergeProps)(DropDown);

export default ServerDropDown;
