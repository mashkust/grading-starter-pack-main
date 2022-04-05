import {createSlice} from '@reduxjs/toolkit';
import {NameSpace,DEFAULT_GENRE} from '../const';

const initialState= {
  quests: [],
  quest: {},
  activeGenre: DEFAULT_GENRE,
  orders: [],
  isDataSending: false,
  setErrorText: '',
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
    sendOrder: (state, action) => {
      state.isDataSending = action.payload;
    },
    setErrorText: (state, action) => {
      state.errorText = action.payload.text;
    },
  },
});

export const {
  loadQuests,
  loadQuest,
  sendOrder,
  setErrorText
} = questData.actions;
