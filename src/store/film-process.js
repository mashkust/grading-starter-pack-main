import {createSlice} from '@reduxjs/toolkit';

import { NameSpace, DEFAULT_GENRE} from '../const';

const initialState = {
  activeGenre: DEFAULT_GENRE,
};

export const questProcess = createSlice({
  name: NameSpace.quest,
  initialState,
  reducers: {
    setActiveGenre: (state, action) => {
      state.activeGenre = action.payload;
    },
  },
});

export const { setActiveGenre} = questProcess.actions;
