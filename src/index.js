import React from 'react';
import ReactDOM from 'react-dom';
import App from '~/components/app/app.jsx';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from '~/reducers/reducers';

const init = () => {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
      rootReducer, /* preloadedState, */
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );
  /* eslint-enable */

  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
