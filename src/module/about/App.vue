<template>
    <div id="app" class="w100 main-wrapper">
        <v-header :isActive=4></v-header>
        <div class="about-me">
            <div class="my-photo">
                <img src="./../../common/img/me.jpg" alt="">
            </div>
            <div class="intro">
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
            <div class="keywords">
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
                        <!--<img src="./images/xuexi.png" alt="学习能力">-->
                        <p>学习能力</p>
                    </li>
                    <li>
                        <!--<img src="./images/zhuanye.png" alt="专业能力">-->
                        <p>专业能力</p>
                    </li>
                    <li>
                        <!--<img src="./images/english.png" alt="英语能力">-->
                        <p>英语能力</p>
                    </li>
                    <li>
                        <!--<img src="./images/tuandui.png" alt="团队合作">-->
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
    @import "./../../common/css/progress.css";

    .about-wrapper {
        width: 100%;
    }

    .bg-gray {
        background: rgba(255, 252, 7, 0.1);
    }
    .about-me {
        width: 70%;
        /*min-width: 1200px;*/
        margin: 240px auto 30px;
        .my-photo, .intro, .keywords {
            display: inline-block;
            font-size: 0;
            vertical-align: top;
            min-height: 300px;
        }
        .my-photo {
            width: 29.2%;
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
        /*background: rgba(244, 244, 244, 0.5);*/
        /*border-radius: 10px;*/
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

            /*border-radius: 10px;*/
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
                /*border-bottom: 2px solid rgba(141, 213, 183, 0.22);*/
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


</style>
