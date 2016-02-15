import fetch from 'isomorphic-fetch';

// Actions
export const REQUEST_SESSION = 'REQUEST_SESSION';
export const REQUEST_SESSION_SUCCESS = 'REQUEST_SESSION_SUCCESS';
export const REQUEST_SESSION_FAILURE = 'REQUEST_SESSION_FAILURE';

function requestSessionSuccess(session) {
  return {
    type: REQUEST_SESSION_SUCCESS,
    session
  };
}

function requestSessionFailure(error) {
  return {
    type: REQUEST_SESSION_FAILURE,
    error
  };
}

export function requestSession() {
  return (dispatch) => {
    fetch('http://10.0.1.10:3000/api/session/new')
    .then(response => response.json())
    .then(response => {
      if (response.sessionId !== undefined) {
        dispatch(requestSessionSuccess(response.sessionId));
      } else {
        dispatch(requestSessionFailure('Shh. The API is napping.'));
      }
    })
    .catch((response) => {
      dispatch(requestSessionFailure(response));
    });
  };
}
