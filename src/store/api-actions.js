import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from './index';
import { APIRoute } from '../const';
import {loadQuests, loadQuest} from './film-data';

export const fetchQuestsAction = createAsyncThunk(
  'data/fetchQuests',
  async () => {
      const { data } = await api.get(APIRoute.Quests);
      store.dispatch(loadQuests(data));
  },
);

export const fetchQuestAction = createAsyncThunk(
  'data/fetchQuest',
  async (id) => {
      const {data} = await api.get(`${APIRoute.Quest}${id}`);
      store.dispatch(loadQuest(data));
  },
);
