/* eslint-disable import/newline-after-import */
import { combineReducers } from 'redux';
import data from './data.js';
import date from './date.js';
import selectedServer from './selectedServer.js';
import servers from './servers.js';
const reducers = { data, date, selectedServer, servers };
const combined = combineReducers(reducers);
module.exports = combined;
