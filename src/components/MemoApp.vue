<template>
  <div class="memo-app">
    <memo-form @add-memo="addMemo" />
    <ul class="memo-list">
      <memo v-for="memo of memos" 
            :key="memo.id" 
            :memo="memo" 
            @delete-memo="deleteMemo"
            @update-memo="updateMemo"/>
    </ul>
  </div>
</template>

<script>
import MemoForm from './MemoForm.vue';
import Memo from './Memo.vue';
import axios from 'axios';
import {mapState} from 'vuex'

const memoAPI = axios.create({
  baseURL: 'http://localhost:8000/api/memos'
})

export default {
  name: 'MemoApp',
  computed: {
    ...mapState([
      'memos'
    ])
  },
  methods: {
    async addMemo(payload) {
      try{
        const res = await memoAPI.post('/', payload)
        this.memos.unshift(res.data);
      }
      catch(err) {
        throw err;
      }
    },

    async deleteMemo(payload) {
      const index = this.memos.findIndex( v => v.id === payload);

      try{
        await memoAPI.delete(`/${[payload]}`);
        this.memos.splice(index, 1);
      }
      catch(err) {
        throw err;
      }
    },

    updateMemo(payload) {
      const {id, content} = payload;
      const targetIndex = this.memos.findIndex(v=>v.id === id);
      const targetMemo = this.memos[targetIndex];

      memoAPI.put(`/${id}`, {content})
        .then(()=> {
          this.memos.splice(targetIndex, 1, { ...targetMemo, content})
        })
    }

  },
  async created() {
    try{
      const res = await memoAPI.get('/');
      this.memos = res.data;
    }
    catch(err) {
      throw err;
    }
    

  },
  components: {
    'memo-form': MemoForm,
    'memo': Memo
  }
}
</script>

<style>
  .memo-list {
    padding: 20px 0;
    margin: 0;
  }
</style>