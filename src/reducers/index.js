import {
  REQUEST_SESSION_SUCCESS
} from '../actions';

function reducer(state = {}, action) {
  switch (action.type) {
  case REQUEST_SESSION_SUCCESS:
    return { session: action.session };
  default:
    return state;
  }
}

export default reducer;
