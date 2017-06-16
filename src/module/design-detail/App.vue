<template>
    <div id="app" class="w100">
        <v-header :isActive=2></v-header>
        <div class="main-detail center">
            <h1>李宗盛和阿信的音乐咖啡馆</h1>
            <p class="container-text">“有练”咖啡厅给人优雅却不失温暖的感觉，不愧是李宗盛和阿信创立的，将音乐的元素融合到咖啡馆的每一个角落。那一把把优质吉他，让人感觉自己像是在一家吉他博物馆喝咖啡，同行的一个朋友是歌手，也的确爱不释手。除了吉他，也安排了可以独自听音乐的角落，里面都是李宗盛大哥亲自挑选的音乐，也当然有他自己的歌，听着那些熟悉的歌曲，在这个繁华的、很难有融入感的城市，突然有了温暖的、熟悉的感觉。</p>
            <p class="tip">Boris本次旅行选择的房源Boris本次旅行选择的房源Boris本次旅行选择的房源Boris本次旅行选择的房源</p>
            <img src="./images/pic2.jpg" alt="">
            <p class="container-text">“有练”咖啡厅给人优雅却不失温暖的感觉，不愧是李宗盛和阿信创立的，将音乐的元素融合到咖啡馆的每一个角落。那一把把优质吉他，让人感觉自己像是在一家吉他博物馆喝咖啡，同行的一个朋友是歌手，也的确爱不释手。除了吉他，也安排了可以独自听音乐的角落，里面都是李宗盛大哥亲自挑选的音乐，也当然有他自己的歌，听着那些熟悉的歌曲，在这个繁华的、很难有融入感的城市，突然有了温暖的、熟悉的感觉。</p>
            <img src="./images/pic.jpg" alt="">
            <img src="./images/pic2.jpg" alt="">
            <p class="container-text">“有练”咖啡厅给人优雅却不失温暖的感觉，不愧是李宗盛和阿信创立的，将音乐的元素融合到咖啡馆的每一个角落。那一把把优质吉他，让人感觉自己像是在一家吉他博物馆喝咖啡，同行的一个朋友是歌手，也的确爱不释手。除了吉他，也安排了可以独自听音乐的角落，里面都是李宗盛大哥亲自挑选的音乐，也当然有他自己的歌，听着那些熟悉的歌曲，在这个繁华的、很难有融入感的城市，突然有了温暖的、熟悉的感觉。</p>
            <img src="./images/pic2.jpg" alt="">
            <p class="container-text">“有练”咖啡厅给人优雅却不失温暖的感觉，不愧是李宗盛和阿信创立的，将音乐的元素融合到咖啡馆的每一个角落。那一把把优质吉他，让人感觉自己像是在一家吉他博物馆喝咖啡，同行的一个朋友是歌手，也的确爱不释手。除了吉他，也安排了可以独自听音乐的角落，里面都是李宗盛大哥亲自挑选的音乐，也当然有他自己的歌，听着那些熟悉的歌曲，在这个繁华的、很难有融入感的城市，突然有了温暖的、熟悉的感觉。</p>
            <p class="tip">Boris本次旅行选择的房源Boris本次旅行选择的房源Boris本次旅行选择的房源。</p>
            <div class="design-desc">
                <p><strong>项目名称：</strong>不愧是李宗盛和阿信创立的。</p>
                <p><strong>设计思路：</strong>觉自己像是在一家吉他博物馆喝咖啡，同行的一个朋友是歌手，也的确爱不释同行的一个朋友是歌手，也的确爱不释。</p>
                <p><strong>项目简介：</strong>里面都是李宗盛大哥亲自挑选的音乐，也当然有他自己的歌，听着那些熟悉的歌也当然有他自己的歌，听着那些熟悉的歌。</p>

            </div>
            <div class="recommend">
                <h3 class="recommend-title">推荐作品</h3>
                <ul class="cf">
                    <li>
                        <img src="./images/design-img1.jpg" alt="">
                        <p><strong>网站</strong>银丰科技有限公司的官方网站</p>
                    </li>
                    <li>
                        <img src="./images/design-img2.jpg" alt="">
                        <p><strong>UI</strong>银丰科技有限公司的官方网站</p>
                    </li>
                    <li>
                        <img src="./images/design-img3.jpg" alt="">
                        <p><strong>APP</strong>银丰科技有限公司的官方网站</p>
                    </li>
                    <li>
                        <img src="./images/design-img4.jpg" alt="">
                        <p><strong>网站</strong>银丰科技有限公司的官方网站</p>
                    </li>
                    <li>
                        <img src="./images/design-img5.jpg" alt="">
                        <p><strong>移动端</strong>银丰科技有限公司的官方网站</p>
                    </li>
                    <li>
                        <img src="./images/design-img1.jpg" alt="">
                        <p><strong>网站</strong>银丰科技有限公司的官方网站</p>
                    </li>

                </ul>
            </div>

        </div>

        <v-footer></v-footer>
        <a href="javascript:void(0);" id="btn" title="回到顶部"></a>
    </div>
</template>

<script>
    import 'common/css/reset.css';
    import VFooter from 'components/common/footer';
    import VHeader from 'components/common/header';
    import {goToTop} from './../../common/js/gototop';

    export default {
        name: 'app',
        data(){
            return {}
        },
        mounted() {
            goToTop();
        },
        methods: {},
        components: {
            VFooter, VHeader
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "./../../common/css/common";
    @import "./../../common/css/reset.css";
    @import "./../../common/css/progress.css";
    .main-detail{
        margin-top: 50px;
        width: 700px;
        text-align: left;
        img{
            width: 100%;
            margin-bottom: 1em;
        }
        h1{
            color: #484848;
            font-weight: bold;
            font-size: 24px;
            margin: 1em 0;
        }
        .container-text{
            font-size: 18px;
            font-weight: 300;
            line-height: 1.7em;
            color: #565a5c;
            margin: 0 0 1.7em;
        }
        .tip{
            font-size: 16px;
            margin: 1em 0;
            color: rgb(204, 205, 206);
        }
        .design-desc{
            padding-top: 1.1em;
            padding-bottom: 1.1em;
            border-top: solid 1px #e6e6e6;
            border-bottom: solid 1px #e6e6e6;

            padding-left: 8em;
            background: url("./images/design-icon.png") no-repeat left 1.4em ;
            background-size: 16%;
            p{
                position: relative;
                padding-left: 5em;
                margin-bottom: 0.5em;
                font-size: 16px;
                line-height: 1.6;
                color: #565a5c;
            }
            strong{
                position: absolute;
                left: 0;
                top: 0;
                font-size: 16px;
                display: block;
                font-weight: normal;
            }
        }
        .recommend{
            margin: 2em 0;
            ul li{
                margin-bottom: 2em;
                width: 31.333%;
                overflow: hidden;
                float: left;
                font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
                /*border: 1px solid #ff6600;*/
                img{
                    width: 100%;
                    border-radius: 10px;
                }
                p{
                    font-weight: 300;
                    color: #484848;
                    margin: 0;
                    word-wrap: break-word;
                    font-size: 15px;
                    line-height: 20px;
                    letter-spacing: 0.2px;
                }
                strong{
                    margin-right: 0.4em;
                    display: inline-block;
                    font-weight: 700;
                }
            }
            ul li:nth-child(2),ul li:nth-child(5){
                margin-left: 3%;
                margin-right: 3%;
            }
        }
        .recommend-title{
            font-weight: normal;
            color: #484848;
            font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
            margin-bottom: 1em;
            word-wrap: break-word;
            font-size: 22px;
            line-height: 28px;
            letter-spacing: -0.2px;
            padding-top: 0;
            padding-bottom: 0;
        }

    }

</style>
