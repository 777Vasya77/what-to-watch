import React from 'react';
import renderer from 'react-test-renderer';
import App from '~/components/app/app';
import {Provider} from "react-redux";
import {createStore} from "redux";

const initialState = {
  films: {
    filmsList: [],
    activeGenreFilter: ``
  }
};

const reducer = (state = initialState) => state;

it(`App component render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={createStore(reducer)}>
          <App />
        </Provider>,
        {createNodeMock: () => ({})}
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
