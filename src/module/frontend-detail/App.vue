<template>
    <div id="app" class="w100">
        <v-header :isActive=1></v-header>
        <div class="main-detail center">
            <p class="annotated"><img src="./images/icon.png" alt="">北京  方正国际大厦  2017-1-6</p>
            <h1>快速了解正则表达式的使用</h1>
            <p class="container-text">正则表达式这个东西虽然不是天天都要用，但是一旦遇到了，又得需要我们花一点时间，有的时候正则表达式写的不正确，还需要不停的调试，有点耽误时间，今天呢，我就来简单的聊一聊正则表达式。</p>
            <p class="tip">本次旅行选择的房源本次旅行选择的房源Boris</p>
            <div class="pre-panel">
                <pre>
.sign-up-btn {
  display: block;
  width: 5rem;
  height: 2.0666666666666667rem;
  line-height:2.0666666666666667rem;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  background: url("../img/sign-up-btn-link.png") no-repeat center center;
  background-size: 4rem 1.0666666666666667rem;
  border: 1px solid #0ab0ea;
}
.sign-up-btn:hover {
  background: url("../img/sign-up-btn-hover.png") no-repeat center center;
  background-size: 4rem 1.0666666666666667rem;
}
                </pre>
            </div>
            <img src="./images/pic4.jpg" alt="">
            <p class="container-text">首先，我们假定今天的工作中有一个这样的需求，用户需要输入一个机构名称，这个机构名要求必须是16个字符，里面可以有中文、数字、26个英文字母或下划线。那么我们的正则表达式应该怎么写呢？</p>
            <div class="pre-panel">
                <pre>
.sign-up-btn {
  display: block;
  width: 5rem;
  height: 2.0666666666666667rem;
  line-height:2.0666666666666667rem;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  background: url("../img/sign-up-btn-link.png") no-repeat center center;
  background-size: 4rem 1.0666666666666667rem;
  border: 1px solid #0ab0ea;
}
.sign-up-btn:hover {
  background: url("../img/sign-up-btn-hover.png") no-repeat center center;
  background-size: 4rem 1.0666666666666667rem;
}
                </pre>
            </div>
            <img src="./images/pic5.jpg" alt="">
            <p class="container-text">好了，关于简单的正则表达式的用法就说到这了，后期我们还会再补充一些常用的正则表达式供大家使用。</p>
            <div class="pre-panel">
                <pre>
.sign-up-btn {
  display: block;
  width: 5rem;
  height: 2.0666666666666667rem;
  line-height:2.0666666666666667rem;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  background: url("../img/sign-up-btn-link.png") no-repeat center center;
  background-size: 4rem 1.0666666666666667rem;
  border: 1px solid #0ab0ea;
}
.sign-up-btn:hover {
  background: url("../img/sign-up-btn-hover.png") no-repeat center center;
  background-size: 4rem 1.0666666666666667rem;
}
                </pre>
            </div>
            <p class="container-text">表示里面的表达式任意一个满足就可以，再通俗一点讲，假定我们要用这个正则表达式来验证 '中华人民共合和国aaH12_2H' 这一串，{16}会让正则表达对每一个字符都验证一遍，但验证每一个的时候都会判断正在验证的这个字符是否属于 [ ] 中的表达式中的范围，如果说是中文，那满足了，如果是数字，那满足了，以此类推，但如果是'!'或是空格，那就不满足了，代码就会返回false。</p>
            <p class="tip">Boris本次旅行选择的房源Boris本次旅行选择的房源</p>

            <div class="recommend">
                <h3 class="recommend-title">推荐文章</h3>
                <ul class="cf">
                    <li>
                        <img src="./images/frontend-img1.jpg" alt="">
                        <h3>jQuery实现点赞效果</h3>
                        <p class="desc">公司的项目经常要用到点赞效果，如果是HTML5页面的话，可以直接用jQuery来实现，网上也能找到几种不同的解决办法，我这边就引用了其中一种，觉得代码简洁易懂。</p>
                        <P class="time"><strong>北京</strong> 2017-06-16 10:00</P>
                    </li>
                    <li>
                        <img src="./images/frontend-img2.jpg" alt="">
                        <h3>floatmenu</h3>
                        <p class="desc">最近空一点，利用空余的时间把工作中常用的一些代码整理出来，方便以后在一个统一的地方查找，自己也好总结一下，加深印象，也可以查漏补缺。</p>
                        <P class="time"><strong>北京</strong> 2017-06-16 10:00</P>
                    </li>
                    <li>
                        <img src="./images/frontend-img3.jpg" alt="">
                        <h3>git 常用命令</h3>
                        <p class="desc">当你更改了文件后，发现分支是错误的，本来应在A上修改，结果在B上修改了。那么怎么办呢？</p>
                        <P class="time"><strong>北京</strong> 2017-06-16 10:00</P>
                    </li>
                    <li>
                        <img src="./images/frontend-img4.jpg" alt="">
                        <h3>可伸缩布局flexible</h3>
                        <p class="desc">那一把把优质吉他，让人感觉自己像是在一家吉他博物馆喝咖啡，同行的一个朋友是歌手，也的确爱不释手。</p>
                        <P class="time"><strong>北京</strong> 2017-06-16 10:00</P>
                    </li>
                    <li>
                        <img src="./images/frontend-img5.jpg" alt="">
                        <h3>vue 动态修改a标签的样式</h3>
                        <p class="desc">公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导说想看看效果怎么样。</p>
                        <P class="time"><strong>北京</strong> 2017-06-16 10:00</P>
                    </li>
                    <li>
                        <img src="./images/frontend-img1.jpg" alt="">
                        <h3>非常有用的CSS代码片段</h3>
                        <p class="desc">李宗盛和阿信创立的，将音乐的元素融合到咖啡馆的每一个角落。那一把把优质吉他，让人感觉自己像是在一家吉他博物馆喝咖啡，同行的一个朋友是歌手，也的确爱不释手。</p>
                        <P class="time"><strong>北京</strong> 2017-06-16 10:00</P>
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
//    import {goToTop} from './../../common/js/gototop';

    export default {
        name: 'app',
        data(){
            return {}
        },
        mounted() {
//            goToTop();
        },
        methods: {},
        components: {
            VFooter, VHeader
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "./../../common/css/common.scss";
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
            margin: 0 0 1.3em;
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
        .annotated{
            font-weight: 300;
            color: #484848;
            font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
            font-size: 15px;
            line-height: 18px;
            letter-spacing: 0.2px;
            img{
                margin-right: 0.4em;
                width: 0.8em;
                border-radius: 0;
                display: inline-block;
                vertical-align: top;
            }
        }

        .recommend{
            margin: 2em 0;
            ul li{
                margin-bottom: 2em;
                width: 31.333%;
                height: 340px;
                overflow: hidden;
                float: left;
                font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
                img{
                    width: 100%;
                    border-radius: 10px;
                }
                .desc{
                    color: #6a6a6a;
                    height: 40px;
                    overflow: hidden;
                }
                p{
                    font-weight: 300;
                    margin: 0;
                    font-size: 15px;
                    line-height: 20px;
                    letter-spacing: 0.2px;
                    -ms-word-wrap: break-word;
                    word-wrap: break-word;
                    text-align: justify;
                }
                .time{
                    margin-top: 0.51em;
                    color: rgb(204, 205, 206);
                    img{
                        margin-right: 0.4em;
                        width: 0.8em;
                        border-radius: 0;
                        display: inline-block;
                        vertical-align: top;
                    }
                    strong{
                        color: #989898;
                        font-weight: 300;
                    }
                }

                h3{
                    font-weight: 400;
                    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
                    font-size: 19px;
                    line-height: 1.7em;
                    color: #484848;
                    word-break: keep-all;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
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
        .pre-panel{
            pre{
                margin: 2em 0;
                padding: 10px;
                background-color: rgba(247, 247, 247, 0.55);
                border: 1px solid rgb(235, 235, 235);
                color: #565a5c;
                font-size: 14px;
                border-radius: 5px;
            }
        }


    }

</style>
