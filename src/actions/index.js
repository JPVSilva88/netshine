/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
import setData from './setData.js';
import changeDate from './changeDate.js';
import getData from './getData.js';
import selectServer from './selectServer.js';
import setServers from './setServers.js';
const actions = {
  getData,
  setData,
  changeDate,
  selectServer,
  setServers
};
module.exports = actions;
