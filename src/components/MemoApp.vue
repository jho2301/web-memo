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

export default {
  name: 'MemoApp',
  data() {
    return {
      memos:[]
    }
  },
  methods: {
    addMemo(payload) {
      this.memos.unshift(payload);
      this.storeMemo();
    },
    storeMemo() {
      const memosToString = JSON.stringify(this.memos);
      localStorage.setItem('memos', memosToString);
    },
    deleteMemo(payload) {
      const index = this.memos.findIndex( v => v.id === payload);
      this.memos.splice(index, 1);
      this.storeMemo();
    },
    updateMemo(payload) {
      const {id, content} = payload;
      const targetIndex = this.memos.findIndex(v=>v.id === id);
      const targetMemo = this.memos[targetIndex];

      this.memos.splice(targetIndex, 1, { ...targetMemo, content})
      this.storeMemo();

    }

  },
  created() {
    this.memos = localStorage.memos ? JSON.parse(localStorage.memos) : [];
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