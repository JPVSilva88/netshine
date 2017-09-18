import { SELECT_SERVER } from './const';

function action(server) {
  return { type: SELECT_SERVER, server };
}

module.exports = action;
