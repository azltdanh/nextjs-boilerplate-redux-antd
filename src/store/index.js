/* eslint-disable global-require */
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from '@reducers';
import rootSaga from '@sagas';

const bindMiddleware = (middleware) => {
  const enhancers = applyMiddleware(...middleware);
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line import/no-extraneous-dependencies
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(enhancers);
  }
  return enhancers;
};

export const configureStore = (preloadedState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  const store = createStore(
    rootReducer,
    preloadedState,
    bindMiddleware(middleware)
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

// eslint-disable-next-line no-unused-vars
const makeStore = (context) => configureStore();

export const wrapper = createWrapper(makeStore, { debug: true });
