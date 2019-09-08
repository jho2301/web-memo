import {FETCH_MEMOS, ADD_MEMOS, DELETE_MEMOS, UPDATE_MEMO} from './mustations-types'

export default {
  [FETCH_MEMOS] (state, payload) {
    state.memos = payload;
  },
  [ADD_MEMOS] (state, payload) {
    state.memos.unshift(payload)
  },
  [DELETE_MEMOS] (state, payload) {
    const index = state.memos.findIndex(v=>v.id === payload);
    state.memos.splice(index ,1);
  },
  [UPDATE_MEMO] (state, {id, content}) {
    const targetIndex = state.memos.findIndex(v=>v.id === id);
    const targetMemo = state.memos[targetIndex];
    state.memos.splice(targetIndex, 1, { ...targetMemo, content})
  }
}