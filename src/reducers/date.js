/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { CHANGE_DATE } from '../actions/const';

const initialState = '29/08/2017';

function reducer(state = initialState, action) {
  switch (action.type) {

    case CHANGE_DATE: {
      return action.date;
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
