<template>
  <div class="memo-form">
    <form @submit.prevent="addMemo">
      <fieldset>
        <div>
          <input type="text"
                 class="memo-form__title-form"
                 placeholder="메모의 제목을 입력해주세요" v-model="title"/>
          <textarea class="memo-form__content-form" placeholder="메모의 내용을 입력해주세요" v-model="content"></textarea>
          <button type="reset" @click.prevent="clearInput"><font-awsome icon="sync-alt"/></button>
        </div>
        <button type="submit" :class="{disabled: !valid}" :disabled="!valid">등록하기</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: '',
    }
  },
  methods: {
    addMemo() {
      const {title, content} = this;
      const id = new Date().getTime();
      this.$emit('add-memo', {id, title, content});
      this.clearInput();
    },
    clearInput() {
      this.title = '';
      this.content = '';
    }
  },
  computed: {
    valid() {
      return (this.title && this.content)? true : false
    }
  }

}
</script>

<style lang="scss" scoped>
  .memo-form {
    margin-bottom: 24px;
    padding-bottom: 40px;
    border-bottom: 1px solid #eee;
    clear: both;
  }

  .memo-form form fieldset div {
    position: relative;
    padding: 24px;
    margin-bottom: 20px;
    box-shadow: 0 4px 10px -4px rgba(0,0,0,0.2);
    background: #ffffff;
    /* width: 40vw; */
  }

  .memo-form form fieldset div button[type="reset"] {
    position: absolute;
    right: 20px;
    bottom: 20px;
    font-size : 16px;
    background: none;
    color: black;
    &:focus {
      outline: none;
    }
  }

  .memo-form form fieldset button[type="submit"] {
    float: right;
    width: 96px;
    padding: 12px 0;
    border-radius: 4px;
    background: #ff5a00;
    color: #fff;
    font-size: 16px;
    &:focus {
      outline: none;
    }
    &:active {
      box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.582);
      background: #e45000;
    }
  }

  .memo-form form fieldset .memo-form__title-form {
    width: 100%;
    margin-bottom: 12px;
    font-size: 18px;
    line-height: 26px;
  }

  .memo-form form fieldset .memo-form__content-form {
    line-height: 22px;
    vertical-align: top;
    font-size: 14px;
    width: 100%;
    height: 66px;
  }

  .disabled {
    background: rgb(212, 212, 212) !important;
  }


  .memo-form input:focus ,.memo-form textarea:focus {
    outline: none;
  }
</style>