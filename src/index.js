import React from 'react';
import ReactDOM from 'react-dom';
import App from '~/components/app/app.jsx';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '~/reducers/reducers';
import thunk from 'redux-thunk';
import createApi from '~/api/api';
import {operations} from '~/operations/oparations';

const init = () => {
  const api = createApi((...args) => store.dispatch(...args));
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
      rootReducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );
  /* eslint-enable */

  const login = (data) => store.dispatch(operations.user.login(data));
  store.dispatch(operations.films.loadFilms());

  ReactDOM.render(
      <Provider store={store}>
        <App userLogin={login}/>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
