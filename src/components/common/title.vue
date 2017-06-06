<template>
  <div class="v-title"><p><slot></slot></p></div>
</template>

<script>
export default {
  name: 'v-title',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
.v-title{
    position: relative;
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    color: #0b6d99;
    font-size: 18px;
    background: #fff url("./../../common/img/title-bg.png") no-repeat center center;
    background-size: 100px 60px;
    p{
        margin: 0 auto;
        height: 100px;
        width: 140px;
        padding-left: 60px;
    }
}
.v-title::before, .v-title::after{
    content: '';
    position: absolute;
    top: 49px;
    width: 45.5%;
    height: 1px;
    background: #eef9f9;
}
.v-title::before{
    left: 0;
}
.v-title::after{
    right: 0;
}
</style>
