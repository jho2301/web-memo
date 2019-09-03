<template>
  <div class="memo-form">
    <form>
      <fieldset>
        <div>
          <input type="text"
                 class="memo-form__title-form"
                 placeholder="메모의 제목을 입력해주세요" />
          <textarea class="memo-form__content-form" placeholder="메모의 내용을 입력해주세요"></textarea>
          <button type="reset"><font-awsome icon="sync-alt"/></button>
        </div>
        <button type="submit">등록하기</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .memo-form {
    margin-bottom: 24px;
    padding-bottom: 40px;
    border-bottom: 1px solid #eee;
  }

  .memo-form form fieldset div {
    position: relative;
    padding: 24px;
    margin-bottom: 20px;
    box-shadow: 0 4px 10px -4px rgba(0,0,0,0.2);
    background: #ffffff;
  }

  .memo-form form fieldset div button[type="reset"] {
    position: absolute;
    right: 20px;
    bottom: 20px;
    font-size : 16px;
    background: none;
    color: black;
  }

  .memo-form form fieldset button[type="submit"] {
    float: right;
    width: 96px;
    padding: 12px 0;
    border-radius: 4px;
    background: #ff5a00;
    color: #fff;
    font-size: 16px;
  }
</style>