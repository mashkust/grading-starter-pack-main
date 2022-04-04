import {combineReducers} from '@reduxjs/toolkit';
// import {NameSpace} from '../const';
import {filmData} from './film-data';
import {questProcess} from './film-process'

export const rootReducer = combineReducers({
  'DATA': filmData.reducer,
  'QUEST': questProcess.reducer,
});
