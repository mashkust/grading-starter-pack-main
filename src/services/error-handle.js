import request from 'axios';
import {HTTP_CODE} from '../const';
import { toast } from 'react-toastify';

export const errorHandle = (error) => {
  if (!request.isAxiosError(error)) {
    throw error;
  }
  const {response} = error;
  if (response) {
    switch (response.status) {
      case HTTP_CODE.BAD_REQUEST:
        toast.info(response.data.messages[0]);
        break;
      case HTTP_CODE.NOT_FOUND:
        toast.info(response.data.messages[0]);
        break;
      case HTTP_CODE.SERVER_ERROR:
        toast.info(response.data.messages[0]);
        break;
      default:
    }
  }
};
