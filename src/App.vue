<template>
  <div id="app">
    <app-header/>
    <memo-app/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import MemoApp from './components/MemoApp'

export default {
  name: 'app',
  components: {
    'app-header': AppHeader,
    'memo-app': MemoApp
  }
}
</script>

<style>
@import "./style/reset.css";

#app {
  width: 560px;
  margin: 0 auto;
}
</style>
