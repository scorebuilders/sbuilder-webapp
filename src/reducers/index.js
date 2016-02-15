import {
  REQUEST_SESSION_SUCCESS,
  SEND_SCORES_SUCCESS
} from '../actions';

function reducer(state = {}, action) {
  switch (action.type) {
  case SEND_SCORES_SUCCESS:
    return {
      ...state,
      isDone: true
    };
  case REQUEST_SESSION_SUCCESS:
    return { session: action.session };
  default:
    return state;
  }
}

export default reducer;
