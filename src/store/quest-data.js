import {createSlice} from '@reduxjs/toolkit';
import {NameSpace,DEFAULT_GENRE} from '../const';

const initialState= {
  quests: [],
  quest: {},
  activeGenre: DEFAULT_GENRE,
};

export const questData = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    loadQuests: (state, action) => {
      state.quests = action.payload;
    },
    loadQuest: (state, action) => {
      state.quest = action.payload;
    },
  },
});

export const {
  loadQuests,
  loadQuest
} = questData.actions;
