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
import {mapState, mapActions} from 'vuex'


export default {
  name: 'MemoApp',
  computed: {
    ...mapState([
      'memos'
    ])
  },
  methods: {
    ...mapActions([
      'fetchMemos',
      'addMemo',
      'deleteMemo',
      'updateMemo'
    ])
    
  },
  created() {
    this.fetchMemos();
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