import { CHANGE_DATE } from './const';

function action(date) {
  return { type: CHANGE_DATE, date };
}

module.exports = action;
