import { combineReducers } from 'redux';

import { currentDisplayingLgtms } from './currentDisplayingLgtmsReducer';

const combined = combineReducers([
  currentDisplayingLgtms,
]);

export default combined;
