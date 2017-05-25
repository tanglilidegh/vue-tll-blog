<template>
  <div id="app">
    <img src="./images/logo.png">
    <hello></hello>
    <a href="frondend.html">前端技术</a>
    <a href="design.html">设计</a>
    <a href="live.html">生活</a>
    <a href="about.html">关于我</a>
    <a href="index.html">sunshine</a>
  </div>
</template>

<script>
  import 'common/css/reset.css';
  import Hello from 'components/Hello/Hello'

  export default {
    name: 'app',
    components: {
      Hello
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
