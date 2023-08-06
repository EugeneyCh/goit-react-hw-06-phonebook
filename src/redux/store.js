import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
// import { DELETE_CONTACT, ADD_CONTACT, UPDATE_FILTER } from './users/types';

import appReducer from './reducers';

// const initialState = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

// const rootReducer = (state = initialState, action) => {
//   console.log({ action });
//   switch (action.type) {
//     case DELETE_CONTACT:
//       return {
//         ...state,
//         // contacts: [action.payload],
//       };

//     default:
//       return state;
//   }
// };

const enhancer = devToolsEnhancer();

export const store = createStore(appReducer, enhancer);
