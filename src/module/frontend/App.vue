<template>
  <div id="app">
    <img src="./images/logo.png">
    <div>前端技术模块详情内容</div>
    <div>
      <p>这里是前端技术模块的详情内容</p>
    </div>
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
