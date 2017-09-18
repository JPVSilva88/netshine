/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { SET_DATA } from '../actions/const';

const initialState = [];

function reducer(state = initialState, action) {
  switch (action.type) {

    case SET_DATA: {
      return action.data;
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
