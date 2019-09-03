<template>
  <div class="memo-app">
    <memo-form></memo-form>
    <memo :memos="memos"></memo>
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

</style>