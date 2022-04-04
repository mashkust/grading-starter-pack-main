import {createSlice} from '@reduxjs/toolkit';
import {NameSpace,DEFAULT_GENRE} from '../const';

// const initialState= {
//   id: 1,
//   title: 'Склеп',
//   description: 'Средневековое кладбище таит в себе много страшных тайн',
//   previewImg: 'img/preview-sklep.jpg',
//   coverImg: 'img/cover-sklep.jpg',
//   type: 'horror',
//   level: 'hard',
//   peopleCount: [2, 5],
//   duration: 120,
// };

// const initialState= {
//   name: 'Jon Vek',
//   peopleCount: 1,
//   phone: '7000000000',
//   isLegal: true,
// };

const initialState= {
  quests: [],
  quest: {},
  activeGenre: DEFAULT_GENRE,
};

export const filmData = createSlice({
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
} = filmData.actions;
