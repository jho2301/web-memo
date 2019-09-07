<template>
  <li class="memo-item">
    <strong>{{memo.title}}</strong>
    <p  >
      <span @dblclick="editContent()" v-if="!isEditing">{{memo.content}}</span>
      <input type="text"
             ref="content"
             :value="memo.content"
             v-else 
             @keydown.ctrl.enter="updateMemo"
             @blur="handleBlur"/>  
    </p>
    <button type="button" @click="deleteMemo"><font-awsome icon="times"></font-awsome></button>
  </li>
</template>

<script>
export default {
  data() {
    return {isEditing: false,}
  },
  props: {
    memo: {
      type: Object,
      default() { return {id:'-', title: '-', content: '-'} }
    }
  },
  methods: {
    deleteMemo() {
      this.$emit('delete-memo', this.memo.id)
    },
    editContent() {
      this.isEditing = true;
      this.$nextTick(()=> this.$refs.content.focus());
    },
    updateMemo() {
      if(this.$refs.content.value.trim().length > 0) {
        this.$emit('update-memo',{id: this.memo.id, content: this.$refs.content.value})
        this.isEditing = false;
      }
    },
    handleBlur() {
      this.isEditing = false;
    }
  },
}
</script>

<style lang="scss" scoped>
  .memo-item {
    overflow: hidden;
    position: relative;
    margin-bottom: 20px;
    padding: 24px;
    background: #fff;
    box-shadow: 0 4px 10px -4px rgba($color: #000000, $alpha: 0.2);
    list-style: none;
  }

  .memo-item button {
    background: none;
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 20px;
    color: #e5e5e5;
  }

  .memo-item strong {
    display: block;
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: normal;
    word-break: break-all
  }

  .memo-item p {
    margin: 0;
    font-size: 14px;
    line-height: 22px;
    color: #666;
  }

  .memo-item p input[type="text"] {
    box-sizing: border-box;
    width: 100%;
    font-size: inherit;
    border: 1px solid #999;
  }
</style>