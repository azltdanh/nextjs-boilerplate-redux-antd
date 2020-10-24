import { combineReducers } from 'redux';
import auth from './auth';

const reducers = {
  auth,
};

const rootReducer = combineReducers({
  ...reducers,
});

export default rootReducer;
