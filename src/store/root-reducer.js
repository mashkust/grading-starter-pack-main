import {combineReducers} from '@reduxjs/toolkit';
// import {NameSpace} from '../const';
import {filmData} from './film-data';

export const rootReducer = combineReducers({
  'DATA': filmData.reducer,
});
