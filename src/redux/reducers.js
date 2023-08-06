import { combineReducers } from 'redux';
import { contactsReducer } from './users/reducer';

const appReducer = combineReducers({
  state: contactsReducer,
});

export default (state, action) => {
  return appReducer(state, action);
};
