<template>
    <div id="app" class="w100 main-wrapper">
        <v-header :isActive=4></v-header>
        <div class="about-me cf">
            <div class="my-photo fl">
                <img src="./../../common/img/me.jpg" alt="">
            </div>
            <div class="intro fl">
                <h3>基本信息</h3>
                <div class="text">
                    <p><strong>姓名：</strong><span>汤利利</span></p>
                    <p><strong>职位：</strong><span>前端开发工程师、UI设计师</span></p>
                    <p><strong>性别：</strong><span>女</span></p>
                    <p><strong>兴趣爱好：</strong><span>看书、画画、看电影、旅游</span></p>
                    <p><strong>现居地：</strong><span>北京-海淀</span></p>
                    <p><strong>E-mail：</strong><span>tly04059@163.com</span></p>
                </div>
                <div class="er-code">
                    <p>微信：</p>
                    <img src="./../../common/img/er-code.jpg" alt="">
                </div>
            </div>
            <div class="keywords fl">
                <h3>自定义标签</h3>
                <ul>
                    <li>责任心强</li>
                    <li>积极好学</li>
                    <li>求知欲强</li>
                    <li>学习能力强</li>
                    <li>团队荣誉感强</li>
                    <li>性格外向</li>
                    <li>热情</li>
                    <li>表达能力强</li>
                    <li>诚实守信</li>
                    <li>没有套路</li>
                </ul>
            </div>
        </div>
        <div class="about-wrapper bg-gray">
            <div class="evaluation">
                <ul>
                    <li>
                        <h3>自我评价</h3>
                        <img src="./images/xuexi.png" alt="学习能力">
                        <p><i>1. </i>这我作为一名靠写作成了一名小网红并且赚到些钱的人，了一名小网红并且赚到些钱的人。</p>
                        <p><i>2. </i>曾经以为靠公众号可以一直吃香的喝辣的。</p>
                        <p><i>3. </i>但是最近明显感受到了微信公众号的疲软。这我作为一名靠写作成。</p>
                        <p><i>4. </i>曾经以为靠公众号可以一直吃香的喝辣的。</p>
                        <p><i>5. </i>但是最近明显感受到了微信公众号的疲软。</p>
                    </li>
                    <li>
                        <h3>职业规划</h3>
                        <img src="./images/zhuanye.png" alt="专业能力">
                        <p><i>1. </i>作为在内容创业圈子里的人，从4月份以来感受到了公众号的寒冬。</p>
                        <p><i>2. </i>我关注的很多大号的打开率断崖式下降，80万的号。</p>
                        <p><i>3. </i>头条阅读量在1万多，50万的情感号，头条阅读量2万多。</p>
                        <p><i>4. </i>惨不忍睹，惨不忍睹。</p>
                        <p><i>5. </i>我最喜欢的大象公会，以前篇篇10万+，现在篇篇5、6万阅读量。</p>
                    </li>
                    <li>
                        <h3>求职意向</h3>
                        <img src="./images/tuandui.png" alt="团队合作">
                        <p><i>1. </i>罗胖说的，抢夺国民总时间的战争打响了。</p>
                        <p><i>2. </i>王者荣耀、快手、连续剧、电影等很多内容都在抢夺用户的时间。</p>
                        <p><i>3. </i>这些内容说实话，比公众号文章叫人有快感多了。</p>
                        <p><i>4. </i>公众号的内容无外乎鸡汤、焦虑、八卦和情感这几个大类。</p>
                        <p><i>5. </i>这些玩意看久了谁不腻。</p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="ability">
            <h3>实力展示</h3>
            <p class="ability-text">以下均是个人工作能力的概况，我一直深信不疑，术业有专攻；工欲善其事，必先利其器。 <br>愿与更多有识之士同识共勉，同享创造。</p>
            <div class="ability-icon">
                <ul>
                    <li>
                        <p>学习能力</p>
                    </li>
                    <li>
                        <p>专业能力</p>
                    </li>
                    <li>
                        <p>英语能力</p>
                    </li>
                    <li>
                        <p>团队合作</p>
                    </li>
                </ul>
            </div>
            <div class="progress">
                <div class="progress-radial progress-100"><b></b></div>
                <div class="progress-radial progress-85"><b></b></div>
                <div class="progress-radial progress-65"><b></b></div>
                <div class="progress-radial progress-100"><b></b></div>
            </div>

        </div>
        <div class="about-wrapper bg-blue">
            <div class="technology">
                <ul>
                    <li>
                        <h3>前端开发</h3>
                        <img src="./images/fronted.jpg" alt="前端开发">
                        <p><i>1. </i>HTML5、CSS3、Javascript、Ajax、JSON</p>
                        <p><i>2. </i>jQuery、Bootstrap、Less、React、Gulp.js、Sea.js</p>
                        <p><i>3. </i>响应式布局、Photoshop、Fireworks切图</p>
                        <p><i>4. </i>善于使用Chrome开发者工具、Firebug等工具进行调试</p>
                        <p><i>5. </i>喜欢了解较新颖的前端技术：Vue.js、Node.js、Require.js、 Webpack、MVVM等</p>
                    </li>
                    <li>
                        <h3>UI设计</h3>
                        <img src="./images/sheji.jpg" alt="UI设计">
                        <p><i>1. </i>Photoshop、Dreamweaver、Fireworks、Illustrator、Flash</p>
                        <p><i>2. </i> 有绘画功底（素描，水粉，国画）。</p>
                        <p><i>3. </i>懂印刷（印刷分色、排版、纸张、覆膜、凹凸工艺等），摄影，灯光控制。</p>
                    </li>
                    <li>
                        <h3>后台技术</h3>
                        <img src="./images/houduan.jpg" alt="后台技术">
                        <p><i>1. </i>了解ASP.NET、SQLserver、C#语言、JAVA基础。</p>
                        <p><i>2. </i> 了解MVC、简单工厂、三层等。</p>
                        <p><i>3. </i> 了解ASP.NET、SQLserver、C#语言、JAVA基础。</p>
                        <p><i>4. </i> 了解MVC、简单工厂、三层等。</p>
                    </li>
                    <li>
                        <h3>辅助技术</h3>
                        <img src="./images/tool.jpg" alt="辅助技术">
                        <p><i>1. </i>版本控制：SVN、Git。</p>
                        <p><i>2. </i>了解SEO网站优化，网站推广。</p>
                        <p><i>3. </i>了解MVC、简单工厂、三层等。</p>
                        <p><i>4. </i>了解ASP.NET、SQLserver、C#语言、JAVA基础。</p>
                        <p><i>5. </i>了解MVC、简单工厂、三层等。</p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="inscribe">
            <p>工作是为了更好的生活，所以要努力工作，</p>
            <p>学习能成就更好的自己，所以要在生活中不断的学习。</p>
        </div>
        <v-footer></v-footer>
        <a href="javascript:void(0);" id="btn" title="回到顶部"></a>
    </div>
</template>

<script>
//    import 'common/css/reset.css';
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
        components: {
            VFooter, VHeader
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "./../../common/css/common.scss";
    /*@import "./../../common/css/progress.css";*/
    @import "./../../common/css/reset.css";
    .main-wrapper {
        background: #effafa url("./images/logo.png") no-repeat center top;
        background-size: contain;
    }
    .about-wrapper {
        width: 100%;
    }

    .bg-gray {
        background: rgba(255, 252, 7, 0.1);
    }
    .about-me {
        width: 60%;
        min-width: 1200px;
        margin: 240px auto 30px;
        .my-photo, .intro, .keywords {
            font-size: 0;
            vertical-align: top;
            min-height: 300px;
        }
        .my-photo {
            img {
                width: 300px;
                height: 300px;
                border-radius: 50%;
                border: 10px solid rgba(11, 109, 153, .1);
            }
        }
        .intro, .keywords {
            h3 {
                position: relative;
                margin-bottom: 5px;
                padding-left: 10px;
                color: rgb(11, 109, 153);
                font-size: 18px;
                text-align: left;
            }
            h3::before {
                content: '';
                position: absolute;
                left: 0;
                top: 3px;
                display: block;
                width: 3px;
                height: 20px;
                background: rgb(11, 109, 153);
            }
        }
        .intro {
            margin-right: 1%;
            width: 39%;
            padding: 20px;
            background: rgba(11, 109, 153, .1);
            border-radius: 10px;
            .text, .er-code {
                display: inline-block;
                font-size: 0;
                vertical-align: top;
            }
            .text {
                width: 75%;
                text-align: left;
                p {
                    margin: 8px 0;
                    strong {
                        display: inline-block;
                        font-weight: normal;
                        width: 80px;
                        color: rgb(11, 109, 153);
                    }
                    span {
                        display: inline-block;
                        padding: 2px 10px;
                        color: #fff;
                        background: rgba(11, 109, 153, .4);
                        border-radius: 5px;
                    }
                }
            }
            .er-code {
                width: 25%;
                p {
                    text-align: center;
                    line-height: 3;
                    color: rgb(11, 109, 153);
                }
                img {
                    width: 100px;
                }
            }
            p {
                font-size: 16px;
                color: #999;

            }
        }
        .keywords {
            width: 30%;
            padding: 20px;
            text-align: left;
            background: rgba(11, 109, 153, .1);
            border-radius: 10px;
            ul {
                font-size: 0;
                li {
                    margin: 6px;
                    padding: 2px 10px;
                    display: inline-block;
                    font-size: 16px;
                    line-height: 2;
                    color: #fff;
                    background: rgba(11, 109, 153, .4);
                    border-radius: 5px;
                }
            }
        }
    }

    .evaluation {
        width: 60%;
        min-width: 1200px;
        margin: 0 auto 20px;
        ul li {
            padding: 30px;
            margin: 0 10px;
            display: inline-block;
            vertical-align: top;
            width: 31%;
            font-size: 0;
            img {
                margin: 20px auto;
                display: block;
            }
            p {
                position: relative;
                font-size: 14px;
                text-align: left;
                margin-bottom: 10px;
                margin-top: 5px;
                color: #535353;
                line-height: 1.5;
                padding-left: 27px;
                i {
                    position: absolute;
                    left: 0;
                    top: -1px;
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    line-height: 20px;
                    text-align: center;
                    font-style: normal;
                    color: #fff;
                    border-radius: 50%;
                    background: #0b6d99;
                }
            }
            h3 {
                margin: 0 auto 10px;
                width: 100px;
                height: 40px;
                line-height: 40px;
                color: #0b6d99;
                font-size: 18px;
                border: 1px solid #0b6d99;
                border-left: 0;
                border-right: 0;
            }
        }
    }

    .ability {
        width: 60%;
        min-width: 1200px;
        margin: 0 auto 20px;
        p.ability-text {
            margin: 30px 0;
            line-height: 1.4;
        }
        h3 {
            position: relative;
            color: #0b6d99;
            font-size: 22px;
            height: 60px;
            line-height: 60px;
        }
        h3::before {
            content: '';
            position: absolute;
            left: 50%;
            bottom: 0;
            margin-left: -50px;
            width: 100px;
            height: 3px;
            background: #c5c5cb;
        }
        .ability-icon {
            li {
                width: 24%;
                font-size: 0;
                display: inline-block;
                p {
                    font-size: 18px;
                    line-height: 2;
                    color: #0b6d99;
                }
            }
        }
    }

    .bg-blue {
        background: rgba(141, 213, 183, 0.22);
    }

    .technology {
        padding: 20px 0;
        width: 60%;
        min-width: 1200px;
        margin: 0 auto 70px;
        ul li {
            padding: 10px;
            margin: 0 0.83%;
            display: inline-block;
            vertical-align: top;
            font-size: 0;
            width: 23%;
            color: #474747;
            min-height: 400px;

            img {
                margin-bottom: 10px;
                width: 100%;
                border-radius: 10px;
            }
            h3 {
                margin: 5px auto 15px;
                font-size: 18px;
                color: #0b6d99;
                width: 100px;
                height: 40px;
                line-height: 40px;
                border: 1px solid #0b6d99;
                border-left: 0;
                border-right: 0;
            }
            p {
                position: relative;
                font-size: 14px;
                text-align: left;
                margin-bottom: 10px;
                margin-top: 5px;
                line-height: 1.5;
                padding-left: 27px;
                i {
                    position: absolute;
                    left: 0;
                    top: 1px;
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    line-height: 20px;
                    text-align: center;
                    font-style: normal;
                    color: #fff;
                    border-radius: 50%;
                    background: #0b6d99;
                }
            }
        }
    }

    .inscribe {
        position: relative;
        margin: 0 auto 80px;
        font-size: 28px;
        color: #0b6d99;
        line-height: 1.5;
        height: 100px;
    }

    .inscribe::before {
        content: '';
        position: absolute;
        left: 50%;
        bottom: -10px;
        margin-left: -50px;
        width: 100px;
        height: 3px;
        background: #c5c5cb;
    }

    .progress-radial {
        display: inline-block;
        margin: 15px 54px;
        position: relative;
        width: 180px;
        height: 180px;
        border-radius: 50%;
        border: 10px solid #93f7ff;
        background-color: #e3fdff;
        box-shadow: 0 2px 15px rgba(11, 109, 153, 0.3);
    }
    .progress-radial:first-child{
        margin-left: 0;
    }
    .progress-radial:last-child{
        margin-right: 0;
    }

    .progress-radial:after, .progress-radial:before {
        content: '';
        width: 31px;
        height: 31px;
        top: 50%;
        left: 50%;
        border-radius: 50%;
        margin-left: -11.5px;
        margin-top: -17.5px;
        background: #e3fdff;
        position: absolute;
        z-index: 999;
        box-shadow: 10px 0 10px rgba(11, 109, 153, 0.3);
    }

    .progress-radial:after {
        z-index: 998;
        box-shadow: none;
        transform: translate(0, -63.5px);
    }

    .progress-radial b:after {
        color: #fffde8;
        text-shadow: 0 1px 2px rgba(10, 92, 128, 0.3);
        position: absolute;
        font-weight: 900;
        left: 50%;
        top: 50%;
        width: 50%;
        height: 50%;
        background-color: #1cbfdb;
        border-radius: 50%;
        margin-left: -25%;
        margin-top: -25%;
        text-align: center;
        line-height: 90px;
        font-size: 30px;
        box-shadow: 0 2px 3px rgba(0, 80, 108, 0.44) inset, 0 0 0 10px #0c7eb1;
    }

    /* -------------------------------------
     * Mixin for progress-% class
     * ------------------------------------- */
    .progress-0 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(90deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-0:before {
        transform: rotate(0deg) translate(0, -72.5px);
    }

    .progress-0 b:after {
        content: "0%";
    }

    .progress-1 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(93.6deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-1:before {
        transform: rotate(3.6deg) translate(0, -72.5px);
    }

    .progress-1 b:after {
        content: "1%";
    }

    .progress-2 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(97.2deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-2:before {
        transform: rotate(7.2deg) translate(0, -72.5px);
    }

    .progress-2 b:after {
        content: "2%";
    }

    .progress-3 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(100.8deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-3:before {
        transform: rotate(10.8deg) translate(0, -72.5px);
    }

    .progress-3 b:after {
        content: "3%";
    }

    .progress-4 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(104.4deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-4:before {
        transform: rotate(14.4deg) translate(0, -72.5px);
    }

    .progress-4 b:after {
        content: "4%";
    }

    .progress-5 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(108deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-5:before {
        transform: rotate(18deg) translate(0, -72.5px);
    }

    .progress-5 b:after {
        content: "5%";
    }

    .progress-6 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(111.6deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-6:before {
        transform: rotate(21.6deg) translate(0, -72.5px);
    }

    .progress-6 b:after {
        content: "6%";
    }

    .progress-7 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(115.2deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-7:before {
        transform: rotate(25.2deg) translate(0, -72.5px);
    }

    .progress-7 b:after {
        content: "7%";
    }

    .progress-8 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(118.8deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-8:before {
        transform: rotate(28.8deg) translate(0, -72.5px);
    }

    .progress-8 b:after {
        content: "8%";
    }

    .progress-9 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(122.4deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-9:before {
        transform: rotate(32.4deg) translate(0, -72.5px);
    }

    .progress-9 b:after {
        content: "9%";
    }

    .progress-10 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(126deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-10:before {
        transform: rotate(36deg) translate(0, -72.5px);
    }

    .progress-10 b:after {
        content: "10%";
    }

    .progress-11 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(129.6deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-11:before {
        transform: rotate(39.6deg) translate(0, -72.5px);
    }

    .progress-11 b:after {
        content: "11%";
    }

    .progress-12 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(133.2deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-12:before {
        transform: rotate(43.2deg) translate(0, -72.5px);
    }

    .progress-12 b:after {
        content: "12%";
    }

    .progress-13 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(136.8deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-13:before {
        transform: rotate(46.8deg) translate(0, -72.5px);
    }

    .progress-13 b:after {
        content: "13%";
    }

    .progress-14 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(140.4deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-14:before {
        transform: rotate(50.4deg) translate(0, -72.5px);
    }

    .progress-14 b:after {
        content: "14%";
    }

    .progress-15 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(144deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-15:before {
        transform: rotate(54deg) translate(0, -72.5px);
    }

    .progress-15 b:after {
        content: "15%";
    }

    .progress-16 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(147.6deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-16:before {
        transform: rotate(57.6deg) translate(0, -72.5px);
    }

    .progress-16 b:after {
        content: "16%";
    }

    .progress-17 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(151.2deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-17:before {
        transform: rotate(61.2deg) translate(0, -72.5px);
    }

    .progress-17 b:after {
        content: "17%";
    }

    .progress-18 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(154.8deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-18:before {
        transform: rotate(64.8deg) translate(0, -72.5px);
    }

    .progress-18 b:after {
        content: "18%";
    }

    .progress-19 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(158.4deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-19:before {
        transform: rotate(68.4deg) translate(0, -72.5px);
    }

    .progress-19 b:after {
        content: "19%";
    }

    .progress-20 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(162deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-20:before {
        transform: rotate(72deg) translate(0, -72.5px);
    }

    .progress-20 b:after {
        content: "20%";
    }

    .progress-21 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(165.6deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-21:before {
        transform: rotate(75.6deg) translate(0, -72.5px);
    }

    .progress-21 b:after {
        content: "21%";
    }

    .progress-22 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(169.2deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-22:before {
        transform: rotate(79.2deg) translate(0, -72.5px);
    }

    .progress-22 b:after {
        content: "22%";
    }

    .progress-23 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(172.8deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-23:before {
        transform: rotate(82.8deg) translate(0, -72.5px);
    }

    .progress-23 b:after {
        content: "23%";
    }

    .progress-24 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(176.4deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-24:before {
        transform: rotate(86.4deg) translate(0, -72.5px);
    }

    .progress-24 b:after {
        content: "24%";
    }

    .progress-25 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(180deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-25:before {
        transform: rotate(90deg) translate(0, -72.5px);
    }

    .progress-25 b:after {
        content: "25%";
    }

    .progress-26 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(183.6deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-26:before {
        transform: rotate(93.6deg) translate(0, -72.5px);
    }

    .progress-26 b:after {
        content: "26%";
    }

    .progress-27 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(187.2deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-27:before {
        transform: rotate(97.2deg) translate(0, -72.5px);
    }

    .progress-27 b:after {
        content: "27%";
    }

    .progress-28 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(190.8deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-28:before {
        transform: rotate(100.8deg) translate(0, -72.5px);
    }

    .progress-28 b:after {
        content: "28%";
    }

    .progress-29 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(194.4deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-29:before {
        transform: rotate(104.4deg) translate(0, -72.5px);
    }

    .progress-29 b:after {
        content: "29%";
    }

    .progress-30 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(198deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-30:before {
        transform: rotate(108deg) translate(0, -72.5px);
    }

    .progress-30 b:after {
        content: "30%";
    }

    .progress-31 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(201.6deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-31:before {
        transform: rotate(111.6deg) translate(0, -72.5px);
    }

    .progress-31 b:after {
        content: "31%";
    }

    .progress-32 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(205.2deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-32:before {
        transform: rotate(115.2deg) translate(0, -72.5px);
    }

    .progress-32 b:after {
        content: "32%";
    }

    .progress-33 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(208.8deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-33:before {
        transform: rotate(118.8deg) translate(0, -72.5px);
    }

    .progress-33 b:after {
        content: "33%";
    }

    .progress-34 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(212.4deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-34:before {
        transform: rotate(122.4deg) translate(0, -72.5px);
    }

    .progress-34 b:after {
        content: "34%";
    }

    .progress-35 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(216deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-35:before {
        transform: rotate(126deg) translate(0, -72.5px);
    }

    .progress-35 b:after {
        content: "35%";
    }

    .progress-36 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(219.6deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-36:before {
        transform: rotate(129.6deg) translate(0, -72.5px);
    }

    .progress-36 b:after {
        content: "36%";
    }

    .progress-37 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(223.2deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-37:before {
        transform: rotate(133.2deg) translate(0, -72.5px);
    }

    .progress-37 b:after {
        content: "37%";
    }

    .progress-38 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(226.8deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-38:before {
        transform: rotate(136.8deg) translate(0, -72.5px);
    }

    .progress-38 b:after {
        content: "38%";
    }

    .progress-39 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(230.4deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-39:before {
        transform: rotate(140.4deg) translate(0, -72.5px);
    }

    .progress-39 b:after {
        content: "39%";
    }

    .progress-40 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(234deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-40:before {
        transform: rotate(144deg) translate(0, -72.5px);
    }

    .progress-40 b:after {
        content: "40%";
    }

    .progress-41 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(237.6deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-41:before {
        transform: rotate(147.6deg) translate(0, -72.5px);
    }

    .progress-41 b:after {
        content: "41%";
    }

    .progress-42 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(241.2deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-42:before {
        transform: rotate(151.2deg) translate(0, -72.5px);
    }

    .progress-42 b:after {
        content: "42%";
    }

    .progress-43 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(244.8deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-43:before {
        transform: rotate(154.8deg) translate(0, -72.5px);
    }

    .progress-43 b:after {
        content: "43%";
    }

    .progress-44 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(248.4deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-44:before {
        transform: rotate(158.4deg) translate(0, -72.5px);
    }

    .progress-44 b:after {
        content: "44%";
    }

    .progress-45 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(252deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-45:before {
        transform: rotate(162deg) translate(0, -72.5px);
    }

    .progress-45 b:after {
        content: "45%";
    }

    .progress-46 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(255.6deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-46:before {
        transform: rotate(165.6deg) translate(0, -72.5px);
    }

    .progress-46 b:after {
        content: "46%";
    }

    .progress-47 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(259.2deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-47:before {
        transform: rotate(169.2deg) translate(0, -72.5px);
    }

    .progress-47 b:after {
        content: "47%";
    }

    .progress-48 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(262.8deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-48:before {
        transform: rotate(172.8deg) translate(0, -72.5px);
    }

    .progress-48 b:after {
        content: "48%";
    }

    .progress-49 {
        background-image: linear-gradient(90deg, #5d6771 50%, transparent 50%, transparent), linear-gradient(266.4deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-49:before {
        transform: rotate(176.4deg) translate(0, -72.5px);
    }

    .progress-49 b:after {
        content: "49%";
    }

    .progress-50 {
        background-image: linear-gradient(-90deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-50:before {
        transform: rotate(180deg) translate(0, -72.5px);
    }

    .progress-50 b:after {
        content: "50%";
    }

    .progress-51 {
        background-image: linear-gradient(-86.4deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-51:before {
        transform: rotate(183.6deg) translate(0, -72.5px);
    }

    .progress-51 b:after {
        content: "51%";
    }

    .progress-52 {
        background-image: linear-gradient(-82.8deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-52:before {
        transform: rotate(187.2deg) translate(0, -72.5px);
    }

    .progress-52 b:after {
        content: "52%";
    }

    .progress-53 {
        background-image: linear-gradient(-79.2deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-53:before {
        transform: rotate(190.8deg) translate(0, -72.5px);
    }

    .progress-53 b:after {
        content: "53%";
    }

    .progress-54 {
        background-image: linear-gradient(-75.6deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-54:before {
        transform: rotate(194.4deg) translate(0, -72.5px);
    }

    .progress-54 b:after {
        content: "54%";
    }

    .progress-55 {
        background-image: linear-gradient(-72deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-55:before {
        transform: rotate(198deg) translate(0, -72.5px);
    }

    .progress-55 b:after {
        content: "55%";
    }

    .progress-56 {
        background-image: linear-gradient(-68.4deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-56:before {
        transform: rotate(201.6deg) translate(0, -72.5px);
    }

    .progress-56 b:after {
        content: "56%";
    }

    .progress-57 {
        background-image: linear-gradient(-64.8deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-57:before {
        transform: rotate(205.2deg) translate(0, -72.5px);
    }

    .progress-57 b:after {
        content: "57%";
    }

    .progress-58 {
        background-image: linear-gradient(-61.2deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-58:before {
        transform: rotate(208.8deg) translate(0, -72.5px);
    }

    .progress-58 b:after {
        content: "58%";
    }

    .progress-59 {
        background-image: linear-gradient(-57.6deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-59:before {
        transform: rotate(212.4deg) translate(0, -72.5px);
    }

    .progress-59 b:after {
        content: "59%";
    }

    .progress-60 {
        background-image: linear-gradient(-54deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-60:before {
        transform: rotate(216deg) translate(0, -72.5px);
    }

    .progress-60 b:after {
        content: "60%";
    }

    .progress-61 {
        background-image: linear-gradient(-50.4deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-61:before {
        transform: rotate(219.6deg) translate(0, -72.5px);
    }

    .progress-61 b:after {
        content: "61%";
    }

    .progress-62 {
        background-image: linear-gradient(-46.8deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-62:before {
        transform: rotate(223.2deg) translate(0, -72.5px);
    }

    .progress-62 b:after {
        content: "62%";
    }

    .progress-63 {
        background-image: linear-gradient(-43.2deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-63:before {
        transform: rotate(226.8deg) translate(0, -72.5px);
    }

    .progress-63 b:after {
        content: "63%";
    }

    .progress-64 {
        background-image: linear-gradient(-39.6deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-64:before {
        transform: rotate(230.4deg) translate(0, -72.5px);
    }

    .progress-64 b:after {
        content: "64%";
    }

    .progress-65 {
        background-image: linear-gradient(-36deg, #e3fdff 50%, transparent 50%, transparent), linear-gradient(270deg, #e3fdff 50%, #93f7ff 50%, #1cbfdb);
    }


    .progress-65:before {
        transform: rotate(234deg) translate(0, -69px);
    }

    .progress-65 b:after {
        content: "65%";
    }

    .progress-66 {
        background-image: linear-gradient(-32.4deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-66:before {
        transform: rotate(237.6deg) translate(0, -72.5px);
    }

    .progress-66 b:after {
        content: "66%";
    }

    .progress-67 {
        background-image: linear-gradient(-28.8deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-67:before {
        transform: rotate(241.2deg) translate(0, -72.5px);
    }

    .progress-67 b:after {
        content: "67%";
    }

    .progress-68 {
        background-image: linear-gradient(-25.2deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-68:before {
        transform: rotate(244.8deg) translate(0, -72.5px);
    }

    .progress-68 b:after {
        content: "68%";
    }

    .progress-69 {
        background-image: linear-gradient(-21.6deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-69:before {
        transform: rotate(248.4deg) translate(0, -72.5px);
    }

    .progress-69 b:after {
        content: "69%";
    }

    .progress-70 {
        background-image: linear-gradient(-18deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-70:before {
        transform: rotate(252deg) translate(0, -72.5px);
    }

    .progress-70 b:after {
        content: "70%";
    }

    .progress-71 {
        background-image: linear-gradient(-14.4deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-71:before {
        transform: rotate(255.6deg) translate(0, -72.5px);
    }

    .progress-71 b:after {
        content: "71%";
    }

    .progress-72 {
        background-image: linear-gradient(-10.8deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-72:before {
        transform: rotate(259.2deg) translate(0, -72.5px);
    }

    .progress-72 b:after {
        content: "72%";
    }

    .progress-73 {
        background-image: linear-gradient(-7.2deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-73:before {
        transform: rotate(262.8deg) translate(0, -72.5px);
    }

    .progress-73 b:after {
        content: "73%";
    }

    .progress-74 {
        background-image: linear-gradient(-3.6deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-74:before {
        transform: rotate(266.4deg) translate(0, -72.5px);
    }

    .progress-74 b:after {
        content: "74%";
    }

    .progress-75 {
        background-image: linear-gradient(0deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-75:before {
        transform: rotate(270deg) translate(0, -72.5px);
    }

    .progress-75 b:after {
        content: "75%";
    }

    .progress-76 {
        background-image: linear-gradient(3.6deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-76:before {
        transform: rotate(273.6deg) translate(0, -72.5px);
    }

    .progress-76 b:after {
        content: "76%";
    }

    .progress-77 {
        background-image: linear-gradient(7.2deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-77:before {
        transform: rotate(277.2deg) translate(0, -72.5px);
    }

    .progress-77 b:after {
        content: "77%";
    }

    .progress-78 {
        background-image: linear-gradient(10.8deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-78:before {
        transform: rotate(280.8deg) translate(0, -72.5px);
    }

    .progress-78 b:after {
        content: "78%";
    }

    .progress-79 {
        background-image: linear-gradient(14.4deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-79:before {
        transform: rotate(284.4deg) translate(0, -72.5px);
    }

    .progress-79 b:after {
        content: "79%";
    }

    .progress-80 {
        background-image: linear-gradient(18deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-80:before {
        transform: rotate(288deg) translate(0, -72.5px);
    }

    .progress-80 b:after {
        content: "80%";
    }

    .progress-81 {
        background-image: linear-gradient(21.6deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-81:before {
        transform: rotate(291.6deg) translate(0, -72.5px);
    }

    .progress-81 b:after {
        content: "81%";
    }

    .progress-82 {
        background-image: linear-gradient(25.2deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-82:before {
        transform: rotate(295.2deg) translate(0, -72.5px);
    }

    .progress-82 b:after {
        content: "82%";
    }

    .progress-83 {
        background-image: linear-gradient(28.8deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-83:before {
        transform: rotate(298.8deg) translate(0, -72.5px);
    }

    .progress-83 b:after {
        content: "83%";
    }

    .progress-84 {
        background-image: linear-gradient(32.4deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-84:before {
        transform: rotate(302.4deg) translate(0, -72.5px);
    }

    .progress-84 b:after {
        content: "84%";
    }

    .progress-85 {
        background-image: linear-gradient(36deg, #e3fdff 50%, transparent 50%, transparent), linear-gradient(270deg, #e3fdff 50%, #93f7ff 50%, #1cbfdb);
    }


    .progress-85:before {
        transform: rotate(306deg) translate(0, -67.5px);
    }

    .progress-85 b:after {
        content: "85%";
    }

    .progress-86 {
        background-image: linear-gradient(39.6deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-86:before {
        transform: rotate(309.6deg) translate(0, -72.5px);
    }

    .progress-86 b:after {
        content: "86%";
    }

    .progress-87 {
        background-image: linear-gradient(43.2deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-87:before {
        transform: rotate(313.2deg) translate(0, -72.5px);
    }

    .progress-87 b:after {
        content: "87%";
    }

    .progress-88 {
        background-image: linear-gradient(46.8deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-88:before {
        transform: rotate(316.8deg) translate(0, -72.5px);
    }

    .progress-88 b:after {
        content: "88%";
    }

    .progress-89 {
        background-image: linear-gradient(50.4deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-89:before {
        transform: rotate(320.4deg) translate(0, -72.5px);
    }

    .progress-89 b:after {
        content: "89%";
    }

    .progress-90 {
        background-image: linear-gradient(54deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-90:before {
        transform: rotate(324deg) translate(0, -72.5px);
    }

    .progress-90 b:after {
        content: "90%";
    }

    .progress-91 {
        background-image: linear-gradient(57.6deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-91:before {
        transform: rotate(327.6deg) translate(0, -72.5px);
    }

    .progress-91 b:after {
        content: "91%";
    }

    .progress-92 {
        background-image: linear-gradient(61.2deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-92:before {
        transform: rotate(331.2deg) translate(0, -72.5px);
    }

    .progress-92 b:after {
        content: "92%";
    }

    .progress-93 {
        background-image: linear-gradient(64.8deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-93:before {
        transform: rotate(334.8deg) translate(0, -72.5px);
    }

    .progress-93 b:after {
        content: "93%";
    }

    .progress-94 {
        background-image: linear-gradient(68.4deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-94:before {
        transform: rotate(338.4deg) translate(0, -72.5px);
    }

    .progress-94 b:after {
        content: "94%";
    }

    .progress-95 {
        background-image: linear-gradient(72deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-95:before {
        transform: rotate(342deg) translate(0, -72.5px);
    }

    .progress-95 b:after {
        content: "95%";
    }

    .progress-96 {
        background-image: linear-gradient(75.6deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-96:before {
        transform: rotate(345.6deg) translate(0, -72.5px);
    }

    .progress-96 b:after {
        content: "96%";
    }

    .progress-97 {
        background-image: linear-gradient(79.2deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-97:before {
        transform: rotate(349.2deg) translate(0, -72.5px);
    }

    .progress-97 b:after {
        content: "97%";
    }

    .progress-98 {
        background-image: linear-gradient(82.8deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-98:before {
        transform: rotate(352.8deg) translate(0, -72.5px);
    }

    .progress-98 b:after {
        content: "98%";
    }

    .progress-99 {
        background-image: linear-gradient(86.4deg, #fffde8 50%, transparent 50%, transparent), linear-gradient(270deg, #fffde8 50%, #5d6771 50%, #5d6771);
    }

    .progress-99:before {
        transform: rotate(356.4deg) translate(0, -72.5px);
    }

    .progress-99 b:after {
        content: "99%";
    }

    .progress-100 {
        background-image: linear-gradient(90deg, #e3fdff 50%, transparent 50%, transparent), linear-gradient(270deg, #e3fdff 50%, #93f7ff 50%, #1cbfdb);
    }

    .progress-100:before {
        transform: rotate(360deg) translate(0, -63.5px);
    }

    .progress-100 b:after {
        content: "100%";
    }

</style>
