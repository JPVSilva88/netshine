import { SET_DATA } from './const';

function action(data) {
  return { type: SET_DATA, data };
}

module.exports = action;
