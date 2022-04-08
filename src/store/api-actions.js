import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from './index';
import { APIRoute } from '../const';
import {loadQuests, loadQuest, sendOrder, setLoading} from './quest-data';
import { errorHandle} from 'services/error-handle.js'
// import maniac from 'img/preview-maniac.jpg' ;
// import mars from 'img/preview-mars-2056.jpg';
// import fatal from 'img/preview-fatal-exp.jpg';
// import final from 'img/preview-final-frontier.jpg';
// import qhost from 'img/preview-ghost-story.jpg';
// import woods from 'img/preview-house-in-the-woods.jpg';
// import metro from 'img/preview-metro2033.jpg';
// import sclep from 'img/preview-sklep.jpg';
// import ritual from 'img/preview-ritual.jpg';
// import ceil from 'img/preview-old-ceil.jpg';
// import house from 'img/preview-old-house.jpg';
// const previewImgs = [maniac, fatal, final, mars, qhost, woods, metro, sclep, ritual, ceil, house];

// export const parseData = (data) => {
//   console.log('data', data);
//   return data;
// }

// export const parseQuests = (data) => data.map(el => {
//   const candidat = previewImgs.find(elem => elem.includes(el.previewImg.slice(3,-4)));
//   console.log('candidat', candidat );
//   return el;
// });

export const fetchQuestsAction = createAsyncThunk(
  'data/fetchQuests',
  async () => {
    try {
      const { data } = await api.get(APIRoute.Quests);
      store.dispatch(loadQuests(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchQuestAction = createAsyncThunk(
  'data/fetchQuest',
  async (id) => {
    try {
      store.dispatch(setLoading(false));
      const {data} = await api.get(`${APIRoute.Quest}${id}`);
      store.dispatch(loadQuest(data));
    } catch (error) {
      errorHandle(error);
    } finally {
      store.dispatch(setLoading(true));
    }
  },
);

export const sendOrderAction = createAsyncThunk(
  'data/sendOrder',
  async ({name, peopleCount, phone, isLegal}) => {
    try {
      await api.post(APIRoute.Orders, {name, peopleCount, phone, isLegal});
      store.dispatch(sendOrder(false));
    } catch (error) {
      errorHandle(error);
    }
  },
);
