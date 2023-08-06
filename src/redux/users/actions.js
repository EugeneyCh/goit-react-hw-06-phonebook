import { DELETE_CONTACT, ADD_CONTACT, UPDATE_FILTER } from './types';

export const deleteContact = id => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const addContact = contact => ({
  type: ADD_CONTACT,
  payload: contact,
});
export const udateFilter = value => ({
  type: UPDATE_FILTER,
  payload: value,
});
