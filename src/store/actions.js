import axios from 'axios';
import { FETCH_MEMOS, DELETE_MEMOS, UPDATE_MEMO } from './mustations-types';

const memoAPI = axios.create({
  baseURL: 'http://localhost:8000/api/memos'
})

export async function fetchMemos ({commit}) {
  try{
    const res = await memoAPI.get('/');
    commit(FETCH_MEMOS, res.data);
  }
  catch(err) {
    throw err;
  }
}

export async function addMemo ({commit}, payload) {
    try{
      await memoAPI.post('/', payload)
      const res = await memoAPI.get('/');
      commit(FETCH_MEMOS, res.data);
    }
    catch(err) {
      throw err;
    }
}

export async function deleteMemo({commit}, id) {
  try{
    await memoAPI.delete(`/${[id]}`);
    commit(DELETE_MEMOS, id)
  }
  catch(err) {
    throw err;
  }
}

export async function updateMemo ({commit}, {id, content}) {
  memoAPI.put(`/${id}`, {content})
  .then(()=> {
    commit(UPDATE_MEMO, {id, content})
  })
}

export default {
  fetchMemos,
  addMemo,
  deleteMemo,
  updateMemo
}