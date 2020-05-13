import axios from "axios";

import { GET_CHATS,AFTER_POST_MESSAGE } from "./types";

export const getChats = name => async dispatch => {
    try {
        const res = await axios.get(`/api/chats/getChats/${name}`);
        console.log(res.data);
    
        dispatch({
          type: GET_CHATS,
          payload: res.data
        });
      } catch (error) {
        console.log(error.responseStatusText);
      }    
}

export function afterPostMessage(data){

  return {
      type: AFTER_POST_MESSAGE,
      payload: data
  }
}