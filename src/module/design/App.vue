<template>
    <div id="app" class="main-wrapper w100">
        <v-header></v-header>
        <br><br><br><br><br><br><br><br><br><br><br><br><br>
        <img src="./images/logo.png">
        <div>设计模块详情内容</div>
        <div>
            <p>这里是设计模块的详情内容</p>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import 'common/css/reset.css';
    import VFooter from 'components/common/footer';
    import VHeader from 'components/common/header';

    export default {
        name: 'app',
        components: {
            VFooter, VHeader
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "./../../common/css/common";
</style>
