import {combineReducers} from 'redux';

import {
  AN_ACTION
} from '../actions';

function reducer(state = {}, action) {
  switch (action.type) {
  case AN_ACTION:
    return state;
  default:
    return state;
  }
}

export default combineReducers({
  app: reducer
  // Other recuders go here
});
