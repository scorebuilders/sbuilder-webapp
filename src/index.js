import React from 'react';
import { Provider } from 'react-redux';
import Main from './components/main.js';
import configureStore from './stores/store.js';

const store = configureStore();

React.render(
  <Provider store={store}>
    {() => <Main/>}
  </Provider>,
  document.getElementById('root')
);
