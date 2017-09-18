/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { SELECT_SERVER } from '../actions/const';

const initialState = null;

function reducer(state = initialState, action) {
  switch (action.type) {

    case SELECT_SERVER: {
      return action.server;
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
