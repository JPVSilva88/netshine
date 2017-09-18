import { SET_SERVERS } from './const';

function action(servers) {
  return { type: SET_SERVERS, servers };
}

module.exports = action;
