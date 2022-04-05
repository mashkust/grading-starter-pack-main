import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from './index';
import { APIRoute } from '../const';
import {loadQuests, loadQuest, sendOrder} from './quest-data';
import { errorHandle} from 'services/error-handle.js'
// import ManiacBcImg from './../img/cover-maniac.jpg';

// const prepareData = (data) => data.map(el => {
//   console.log('el', el);
//   el.coverImg =  ManiacBcImg;
//   return el;
//  })
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
      const {data} = await api.get(`${APIRoute.Quest}${id}`);
      store.dispatch(loadQuest(data));
    } catch (error) {
      errorHandle(error);
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
