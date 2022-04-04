import {combineReducers} from '@reduxjs/toolkit';
// import {NameSpace} from '../const';
import {questData} from './quest-data';
import {questProcess} from './quest-process'

export const rootReducer = combineReducers({
  'DATA': questData.reducer,
  'QUEST': questProcess.reducer,
});
