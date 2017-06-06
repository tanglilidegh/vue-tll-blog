<template>
  <div class="v-header">
      <a href="index.html" class="current">Home</a>
      <a href="frontend.html">FrontEnd</a>
      <a href="design.html">Design</a>
      <a href="live.html">Live</a>
      <a href="about.html">About</a>

  </div>
</template>

<script>
export default {
  name: 'v-header',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
    .v-header{
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: rgba(11,109,153,.4);
        a{
            display: inline-block;
            padding: 0 30px;
            text-align: center;
            color: #fff;
            font-weight: bold;
        }
        .current{
            position: relative;
        }
        .current::before{
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            margin-left: -35px;
            width: 70px;
            height: 4px;
            background: #0b6d99;
        }
    }
</style>
