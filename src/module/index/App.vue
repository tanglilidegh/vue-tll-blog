<template>
    <div id="app" class="main-wrapper w100">
        <!--<img src="./images/222.png" alt="">-->
        <v-header :isActive=0></v-header>
        <mt-swipe :auto="4000" class="min-swipe">
            <mt-swipe-item>
                <img src="./images/222.png" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="./images/bg.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="./images/bg2.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="./images/bg1.jpg" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!--
        <div class="frontend margin-top-200">
            <ul class="frontend-list">
                <li><a href="javascript:void (0);">HTML</a></li>
                <li><a href="javascript:void (0);">CSS</a></li>
                <li><a href="javascript:void (0);">JS</a></li>
                <li><a href="javascript:void (0);">Vue</a></li>
                <li><a href="javascript:void (0);">SASS</a></li>
                <li><a href="javascript:void (0);">Git</a></li>
                <li><a href="javascript:void (0);">iTerm2</a></li>
            </ul>
            <div class="frontend-container">
                <ul>
                    <li>
                        <img src="./images/frontend-img1.jpg" alt="frontend-img1">
                        <h5><a href="javascript:void (0);">vue 动态修改a标签的样式</a></h5>
                        <p>公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导...</p>
                        <p class="issuing-time">发布时间：3小时前</p>

                    </li>
                    <li>
                        <img src="./images/frontend-img2.jpg" alt="frontend-img1">
                        <h5><a href="javascript:void (0);">在vue2.0项目中一个简单的倒计时功能</a></h5>
                        <p>公司3月底有一个运动会项目，项目中有一项是平板支撑，参加比赛的人会通过扫二维的方式进入到报名页面，我们的页面会...</p>
                        <p class="issuing-time">发布时间：3小时前</p>

                    </li>
                    <li>
                        <img src="./images/frontend-img3.jpg" alt="frontend-img1">
                        <h5><a href="javascript:void (0);">vue-router 2.0 常用基础知识点之router.push()</a></h5>
                        <p>router.push(location) 除了使用 <\router-link>\ 创建 a 标签来定义导航链接，我们还可以借助 router。...</p>
                        <p class="issuing-time">发布时间：3小时前</p>

                    </li>
                    <li>
                        <img src="./images/frontend-img4.jpg" alt="frontend-img1">
                        <h5><a href="javascript:void (0);">vue-router 2.0 常用基础知识点之导航钩子</a></h5>
                        <p>导航钩子 vue-router 提供的导航钩子主要用来拦截导航，让它完成跳转或取消。有多种方式可以在路由导航发生时执行钩子：全局的或者组件级的...</p>
                        <p class="issuing-time">发布时间：3小时前</p>

                    </li>
                    <li>
                        <img src="./images/frontend-img5.jpg" alt="frontend-img1">
                        <h5><a href="javascript:void (0);">非常有用的CSS代码片段</a></h5>
                        <p>字体渐变色 2色 字体渐变色 4色 label标签和表单控件垂直居中对齐 渐变背景 文本两端对齐的样式 限制输入字数，超出部分显示...</p>
                        <p class="issuing-time">发布时间：3小时前</p>

                    </li>
                    <li>
                        <img src="./images/frontend-img6.jpg" alt="frontend-img1">
                        <h5><a href="javascript:void (0);">常用网站链接</a></h5>
                        <p>1、工作中常用的小功能 草料二维码生成器 http://cli.im/在线二维码解码器 ...</p>
                        <p class="issuing-time">发布时间：3小时前</p>

                    </li>
                    <li>
                        <img src="./images/frontend-img7.jpg" alt="frontend-img1">
                        <h5><a href="javascript:void (0);">vue 动态修改a标签的样式</a></h5>
                        <p>公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行...</p>
                        <p class="issuing-time">发布时间：3小时前</p>

                    </li>
                    <li>
                        <img src="./images/frontend-img1.jpg" alt="frontend-img1">
                        <h5><a href="javascript:void (0);">微信授权、登录、注册逻辑</a></h5>
                        <p>刚进入公司的时候，参与了一个公司较为复杂的项目，我们公司大部分都只是一些活动页...</p>
                        <p class="issuing-time">发布时间：3小时前</p>

                    </li>
                    <li>
                        <img src="./images/frontend-img1.jpg" alt="frontend-img1">
                        <h5><a href="javascript:void (0);">vue 动态修改a标签的样式</a></h5>
                        <p>公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导...</p>
                        <p class="issuing-time">发布时间：3小时前</p>

                    </li>
                    <li>
                        <img src="./images/frontend-img2.jpg" alt="frontend-img1">
                        <h5><a href="javascript:void (0);">在vue2.0项目中一个简单的倒计时功能</a></h5>
                        <p>公司3月底有一个运动会项目，项目中有一项是平板支撑，参加比赛的人会通过扫二维的方式进入到报名页面，我们的页面会...</p>
                        <p class="issuing-time">发布时间：3小时前</p>

                    </li>
                    <li>
                        <img src="./images/frontend-img3.jpg" alt="frontend-img1">
                        <h5><a href="javascript:void (0);">vue-router 2.0 常用基础知识点之router.push()</a></h5>
                        <p>router.push(location) 除了使用 <\router-link>\ 创建 a 标签来定义导航链接，我们还可以借助 router。...</p>
                        <p class="issuing-time">发布时间：3小时前</p>

                    </li>
                    <li>
                        <img src="./images/frontend-img4.jpg" alt="frontend-img1">
                        <h5><a href="javascript:void (0);">vue-router 2.0 常用基础知识点之导航钩子</a></h5>
                        <p>导航钩子 vue-router 提供的导航钩子主要用来拦截导航，让它完成跳转或取消。有多种方式可以在路由导航发生时执行钩子：全局的或者组件级的...</p>
                        <p class="issuing-time">发布时间：3小时前</p>

                    </li>
                    <li>
                        <img src="./images/frontend-img5.jpg" alt="frontend-img1">
                        <h5><a href="javascript:void (0);">非常有用的CSS代码片段</a></h5>
                        <p>字体渐变色 2色 字体渐变色 4色 label标签和表单控件垂直居中对齐 渐变背景 文本两端对齐的样式 限制输入字数，超出部分显示...</p>
                        <p class="issuing-time">发布时间：3小时前</p>

                    </li>
                    <li>
                        <img src="./images/frontend-img6.jpg" alt="frontend-img1">
                        <h5><a href="javascript:void (0);">常用网站链接</a></h5>
                        <p>1、工作中常用的小功能 草料二维码生成器 http://cli.im/在线二维码解码器 ...</p>
                        <p class="issuing-time">发布时间：3小时前</p>

                    </li>
                    <li>
                        <img src="./images/frontend-img7.jpg" alt="frontend-img1">
                        <h5><a href="javascript:void (0);">vue 动态修改a标签的样式</a></h5>
                        <p>公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行...</p>
                        <p class="issuing-time">发布时间：3小时前</p>

                    </li>
                    <li>
                        <img src="./images/frontend-img1.jpg" alt="frontend-img1">
                        <h5><a href="javascript:void (0);">微信授权、登录、注册逻辑</a></h5>
                        <p>刚进入公司的时候，参与了一个公司较为复杂的项目，我们公司大部分都只是一些活动页...</p>
                        <p class="issuing-time">发布时间：3小时前</p>

                    </li>
                    <li>
                        <img src="./images/frontend-img1.jpg" alt="frontend-img1">
                        <h5><a href="javascript:void (0);">vue 动态修改a标签的样式</a></h5>
                        <p>公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导...</p>
                        <p class="issuing-time">发布时间：3小时前</p>

                    </li>
                    <li>
                        <img src="./images/frontend-img2.jpg" alt="frontend-img1">
                        <h5><a href="javascript:void (0);">在vue2.0项目中一个简单的倒计时功能</a></h5>
                        <p>公司3月底有一个运动会项目，项目中有一项是平板支撑，参加比赛的人会通过扫二维的方式进入到报名页面，我们的页面会...</p>
                        <p class="issuing-time">发布时间：3小时前</p>

                    </li>
                    <li>
                        <img src="./images/frontend-img3.jpg" alt="frontend-img1">
                        <h5><a href="javascript:void (0);">vue-router 2.0 常用基础知识点之router.push()</a></h5>
                        <p>router.push(location) 除了使用 <\router-link>\ 创建 a 标签来定义导航链接，我们还可以借助 router。...</p>
                        <p class="issuing-time">发布时间：3小时前</p>

                    </li>
                    <li>
                        <img src="./images/frontend-img4.jpg" alt="frontend-img1">
                        <h5><a href="javascript:void (0);">vue-router 2.0 常用基础知识点之导航钩子</a></h5>
                        <p>导航钩子 vue-router 提供的导航钩子主要用来拦截导航，让它完成跳转或取消。有多种方式可以在路由导航发生时执行钩子：全局的或者组件级的...</p>
                        <p class="issuing-time">发布时间：3小时前</p>

                    </li>
                    <li>
                        <img src="./images/frontend-img5.jpg" alt="frontend-img1">
                        <h5><a href="javascript:void (0);">非常有用的CSS代码片段</a></h5>
                        <p>字体渐变色 2色 字体渐变色 4色 label标签和表单控件垂直居中对齐 渐变背景 文本两端对齐的样式 限制输入字数，超出部分显示...</p>
                        <p class="issuing-time">发布时间：3小时前</p>

                    </li>
                    <!--
                    <li>
                    <img src="./images/frontend-img6.jpg" alt="frontend-img1">
                    <h5><a href="javascript:void (0);">常用网站链接</a></h5>
                    <p>1、工作中常用的小功能 草料二维码生成器 http://cli.im/在线二维码解码器 ...</p>
                    <p class="issuing-time">发布时间：3小时前</p>

                    </li>
                    <li>
                    <img src="./images/frontend-img7.jpg" alt="frontend-img1">
                    <h5><a href="javascript:void (0);">vue 动态修改a标签的样式</a></h5>
                    <p>公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行...</p>
                    <p class="issuing-time">发布时间：3小时前</p>

                    </li>
                    <li>
                    <img src="./images/frontend-img1.jpg" alt="frontend-img1">
                    <h5><a href="javascript:void (0);">微信授权、登录、注册逻辑</a></h5>
                    <p>刚进入公司的时候，参与了一个公司较为复杂的项目，我们公司大部分都只是一些活动页...</p>
                    <p class="issuing-time">发布时间：3小时前</p>

                    </li>

                </ul>
            </div>
            <a href="frontend.html" class="more">查看更多>></a>
        </div>
    -->
        <mt-navbar class="page-part" v-model="selected">
            <mt-tab-item id="1">HTML</mt-tab-item>
            <mt-tab-item id="2">CSS</mt-tab-item>
            <mt-tab-item id="3">JS</mt-tab-item>
            <mt-tab-item id="4">Vue</mt-tab-item>
            <mt-tab-item id="5">SASS</mt-tab-item>
            <mt-tab-item id="6">Git</mt-tab-item>
            <mt-tab-item id="7">iTerm2</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <div class="frontend-container">
                    <ul>
                        <li class="hvr-box-shadow-outset">
                            <img src="./images/frontend-img1.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">vue 动态修改a标签的样式</a></h5>
                            <p>公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                        <li class="hvr-box-shadow-outset">
                            <img src="./images/frontend-img2.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">在vue2.0项目中一个简单的倒计时功能</a></h5>
                            <p>公司3月底有一个运动会项目，项目中有一项是平板支撑，参加比赛的人会通过扫二维的方式进入到报名页面，我们的页面会...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                        <li class="hvr-box-shadow-outset">
                            <img src="./images/frontend-img3.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">vue-router 2.0 常用基础知识点之router.push()</a></h5>
                            <p>router.push(location) 除了使用 <\router-link>\ 创建 a 标签来定义导航链接，我们还可以借助 router。...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                        <li class="hvr-box-shadow-outset">
                            <img src="./images/frontend-img4.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">vue-router 2.0 常用基础知识点之导航钩子</a></h5>
                            <p>导航钩子 vue-router 提供的导航钩子主要用来拦截导航，让它完成跳转或取消。有多种方式可以在路由导航发生时执行钩子：全局的或者组件级的...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                        <li class="hvr-box-shadow-outset">
                            <img src="./images/frontend-img5.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">非常有用的CSS代码片段</a></h5>
                            <p>字体渐变色 2色 字体渐变色 4色 label标签和表单控件垂直居中对齐 渐变背景 文本两端对齐的样式 限制输入字数，超出部分显示...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                        <li class="hvr-box-shadow-outset">
                            <img src="./images/frontend-img6.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">常用网站链接</a></h5>
                            <p>1、工作中常用的小功能 草料二维码生成器 http://cli.im/在线二维码解码器 ...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                        <li class="hvr-box-shadow-outset">
                            <img src="./images/frontend-img7.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">vue 动态修改a标签的样式</a></h5>
                            <p>公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                        <li class="hvr-box-shadow-outset">
                            <img src="./images/frontend-img1.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">微信授权、登录、注册逻辑</a></h5>
                            <p>刚进入公司的时候，参与了一个公司较为复杂的项目，我们公司大部分都只是一些活动页...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                    </ul>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <div class="frontend-container">
                    <ul>
                        <li>
                            <img src="./images/frontend-img1.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">vue 动态修改a标签的样式</a></h5>
                            <p>公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                        <li>
                            <img src="./images/frontend-img2.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">在vue2.0项目中一个简单的倒计时功能</a></h5>
                            <p>公司3月底有一个运动会项目，项目中有一项是平板支撑，参加比赛的人会通过扫二维的方式进入到报名页面，我们的页面会...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                        <li>
                            <img src="./images/frontend-img3.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">vue-router 2.0 常用基础知识点之router.push()</a></h5>
                            <p>router.push(location) 除了使用 <\router-link>\ 创建 a 标签来定义导航链接，我们还可以借助 router。...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                        <li>
                            <img src="./images/frontend-img4.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">vue-router 2.0 常用基础知识点之导航钩子</a></h5>
                            <p>导航钩子 vue-router 提供的导航钩子主要用来拦截导航，让它完成跳转或取消。有多种方式可以在路由导航发生时执行钩子：全局的或者组件级的...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                    </ul>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <div class="frontend-container">
                    <ul>
                        <li>
                            <img src="./images/frontend-img4.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">vue-router 2.0 常用基础知识点之导航钩子</a></h5>
                            <p>导航钩子 vue-router 提供的导航钩子主要用来拦截导航，让它完成跳转或取消。有多种方式可以在路由导航发生时执行钩子：全局的或者组件级的...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                        <li>
                            <img src="./images/frontend-img5.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">非常有用的CSS代码片段</a></h5>
                            <p>字体渐变色 2色 字体渐变色 4色 label标签和表单控件垂直居中对齐 渐变背景 文本两端对齐的样式 限制输入字数，超出部分显示...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                        <li>
                            <img src="./images/frontend-img6.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">常用网站链接</a></h5>
                            <p>1、工作中常用的小功能 草料二维码生成器 http://cli.im/在线二维码解码器 ...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                        <li>
                            <img src="./images/frontend-img7.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">vue 动态修改a标签的样式</a></h5>
                            <p>公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                        <li>
                            <img src="./images/frontend-img1.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">微信授权、登录、注册逻辑</a></h5>
                            <p>刚进入公司的时候，参与了一个公司较为复杂的项目，我们公司大部分都只是一些活动页...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                        <li>
                            <img src="./images/frontend-img1.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">vue 动态修改a标签的样式</a></h5>
                            <p>公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                        <li>
                            <img src="./images/frontend-img2.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">在vue2.0项目中一个简单的倒计时功能</a></h5>
                            <p>公司3月底有一个运动会项目，项目中有一项是平板支撑，参加比赛的人会通过扫二维的方式进入到报名页面，我们的页面会...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                    </ul>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <div class="frontend-container">
                    <ul>
                        <li>
                            <img src="./images/frontend-img6.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">常用网站链接</a></h5>
                            <p>1、工作中常用的小功能 草料二维码生成器 http://cli.im/在线二维码解码器 ...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                        <li>
                            <img src="./images/frontend-img7.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">vue 动态修改a标签的样式</a></h5>
                            <p>公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                        <li>
                            <img src="./images/frontend-img1.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">微信授权、登录、注册逻辑</a></h5>
                            <p>刚进入公司的时候，参与了一个公司较为复杂的项目，我们公司大部分都只是一些活动页...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                    </ul>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="5">
                <div class="frontend-container">
                    <ul>
                        <li>
                            <img src="./images/frontend-img1.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">vue 动态修改a标签的样式</a></h5>
                            <p>公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                        <li>
                            <img src="./images/frontend-img2.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">在vue2.0项目中一个简单的倒计时功能</a></h5>
                            <p>公司3月底有一个运动会项目，项目中有一项是平板支撑，参加比赛的人会通过扫二维的方式进入到报名页面，我们的页面会...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                    </ul>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="6">
                <div class="frontend-container">
                    <ul>
                        <li>
                            <img src="./images/frontend-img5.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">非常有用的CSS代码片段</a></h5>
                            <p>字体渐变色 2色 字体渐变色 4色 label标签和表单控件垂直居中对齐 渐变背景 文本两端对齐的样式 限制输入字数，超出部分显示...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                        <li>
                            <img src="./images/frontend-img6.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">常用网站链接</a></h5>
                            <p>1、工作中常用的小功能 草料二维码生成器 http://cli.im/在线二维码解码器 ...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                        <li>
                            <img src="./images/frontend-img1.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">vue 动态修改a标签的样式</a></h5>
                            <p>公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                        <li>
                            <img src="./images/frontend-img2.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">在vue2.0项目中一个简单的倒计时功能</a></h5>
                            <p>公司3月底有一个运动会项目，项目中有一项是平板支撑，参加比赛的人会通过扫二维的方式进入到报名页面，我们的页面会...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                    </ul>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="7">
                <div class="frontend-container">
                    <ul>
                        <li>
                            <img src="./images/frontend-img1.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">vue 动态修改a标签的样式</a></h5>
                            <p>公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                        <li>
                            <img src="./images/frontend-img2.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">在vue2.0项目中一个简单的倒计时功能</a></h5>
                            <p>公司3月底有一个运动会项目，项目中有一项是平板支撑，参加比赛的人会通过扫二维的方式进入到报名页面，我们的页面会...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                        <li>
                            <img src="./images/frontend-img5.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">非常有用的CSS代码片段</a></h5>
                            <p>字体渐变色 2色 字体渐变色 4色 label标签和表单控件垂直居中对齐 渐变背景 文本两端对齐的样式 限制输入字数，超出部分显示...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                        <li>
                            <img src="./images/frontend-img6.jpg" alt="frontend-img1">
                            <h5><a href="javascript:void (0);">常用网站链接</a></h5>
                            <p>1、工作中常用的小功能 草料二维码生成器 http://cli.im/在线二维码解码器 ...</p>
                            <p class="issuing-time">发布时间：3小时前</p>

                        </li>
                    </ul>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
        <div class="design bg-white">
            <h3 class="title">Design</h3>
            <div class="design-container">
                <ul class="design-list">
                    <li>
                        <div class="triangle-left-gray triangle-right-bottom"></div>
                        <div class="info h145"></div>
                        <div class="info h145 text-right">
                            <a href="javascript:void(0);">
                                <h3 class="design-class">UI</h3>
                                <p class="company">银丰科技有限公司官网设计</p>
                                <p class="time">2015-10-15 8月</p>
                                <p class="address">浙江 杭州 动漫之都 1003</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="triangle-left-white triangle-left-bottom"></div>
                        <a href="javascript:void (0);" class="design-photo"><img src="./images/design-img1.jpg"
                                                                                 alt="design-img1"></a>
                    </li>
                    <li>
                        <div class="triangle-right-white triangle-right-top"></div>
                        <a href="javascript:void (0);" class="design-photo"><img src="./images/design-img2.jpg"
                                                                                 alt="design-img1"></a>
                    </li>
                    <li>
                        <div class="triangle-right-gray triangle-left-top"></div>
                        <div class="triangle-left-gray triangle-right-bottom"></div>
                        <div class="info h145 text-left border-bottom-3">
                            <a href="javascript:void(0);">
                                <h3 class="design-class">UI</h3>
                                <p class="company">银丰科技有限公司官网设计</p>
                                <p class="time">2015-10-15 8月</p>
                                <p class="address">浙江 杭州 动漫之都 1003</p>
                            </a>
                        </div>
                        <div class="info h145 text-right border-top-3">
                            <a href="javascript:void(0);">
                                <h3 class="design-class">App</h3>
                                <p class="company">银丰科技有限公司官网设计</p>
                                <p class="time">2015-10-15 8月</p>
                                <p class="address">浙江 杭州 动漫之都 1003</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="triangle-left-white triangle-left-bottom"></div>
                        <a href="javascript:void (0);" class="design-photo"><img src="./images/design-img3.jpg"
                                                                                 alt="design-img1"></a>
                    </li>
                    <li>
                        <div class="triangle-right-white triangle-right-top"></div>
                        <a href="javascript:void (0);" class="design-photo"><img src="./images/design-img4.jpg"
                                                                                 alt="design-img1"></a>
                    </li>
                    <li>
                        <div class="triangle-right-gray triangle-left-top"></div>
                        <div class="triangle-left-gray triangle-right-bottom"></div>
                        <div class="info h145 text-left border-bottom-3">
                            <a href="javascript:void(0);">
                                <h3 class="design-class">网站</h3>
                                <p class="company">银丰科技有限公司官网设计</p>
                                <p class="time">2015-10-15 8月</p>
                                <p class="address">浙江 杭州 动漫之都 1003</p>
                            </a>
                        </div>
                        <div class="info h145 text-right border-top-3">
                            <a href="javascript:void(0);">
                                <h3 class="design-class">UI</h3>
                                <p class="company">银丰科技有限公司官网设计</p>
                                <p class="time">2015-10-15 8月</p>
                                <p class="address">浙江 杭州 动漫之都 1003</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="triangle-left-white triangle-left-bottom"></div>
                        <a href="javascript:void (0);" class="design-photo"><img src="./images/design-img5.jpg"
                                                                                 alt="design-img1"></a>
                    </li>
                    <li>
                        <div class="triangle-right-white triangle-right-top"></div>
                        <a href="javascript:void (0);" class="design-photo"><img src="./images/design-img1.jpg"
                                                                                 alt="design-img1"></a>
                    </li>
                    <li>
                        <div class="triangle-right-gray triangle-left-top"></div>
                        <div class="info h145 text-left">
                            <a href="javascript:void(0);">
                                <h3 class="design-class">Logo</h3>
                                <p class="company">银丰科技有限公司官网设计</p>
                                <p class="time">2015-10-15 8月</p>
                                <p class="address">浙江 杭州 动漫之都 1003</p>
                            </a>
                        </div>
                        <div class="info h145">
                        </div>
                    </li>
                    <li>
                        <div class="triangle-left-gray triangle-right-bottom"></div>
                        <div class="info h145"></div>
                        <div class="info h145 text-right">
                            <a href="javascript:void(0);">
                                <h3 class="design-class">UI</h3>
                                <p class="company">银丰科技有限公司官网设计</p>
                                <p class="time">2015-10-15 8月</p>
                                <p class="address">浙江 杭州 动漫之都 1003</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="triangle-left-white triangle-left-bottom"></div>
                        <a href="javascript:void (0);" class="design-photo"><img src="./images/design-img2.jpg"
                                                                                 alt="design-img1"></a>
                    </li>
                    <li>
                        <div class="triangle-right-white triangle-right-top"></div>
                        <a href="javascript:void (0);" class="design-photo"><img src="./images/design-img3.jpg"
                                                                                 alt="design-img1"></a>
                    </li>
                    <li>
                        <div class="triangle-right-gray triangle-left-top"></div>
                        <div class="triangle-left-gray triangle-right-bottom"></div>
                        <div class="info h145 text-left border-bottom-3">
                            <a href="javascript:void(0);">
                                <h3 class="design-class">UI</h3>
                                <p class="company">银丰科技有限公司官网设计</p>
                                <p class="time">2015-10-15 8月</p>
                                <p class="address">浙江 杭州 动漫之都 1003</p>
                            </a>
                        </div>
                        <div class="info h145 text-right border-top-3">
                            <a href="javascript:void(0);">
                                <h3 class="design-class">包装设计</h3>
                                <p class="company">银丰科技有限公司官网设计</p>
                                <p class="time">2015-10-15 8月</p>
                                <p class="address">浙江 杭州 动漫之都 1003</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="triangle-left-white triangle-left-bottom"></div>
                        <a href="javascript:void (0);" class="design-photo"><img src="./images/design-img4.jpg"
                                                                                 alt="design-img1"></a>
                    </li>
                </ul>
            </div>
            <a href="design.html" class="more">查看更多>></a>
        </div>
        <div class="live bg-white">
            <h3 class="title">Live</h3>
            <div class="live-container">
                <div class="pic hvr-box-shadow-outset">
                    <img src="./images/live-img1.jpg"/>
                    <h3><a href="#">野蛮生长01</a></h3>
                    <p>人长大的标志：试着听从自己内心的声音，而不去在乎外面的声
                        音，等待和拖延是世界上最容易压垮一个人得东西。犹豫不决是你
                        最大的敌人。
                    </p>
                    <p class="data-time">2016-10-12 12:00</p>
                </div>
                <div class="pic hvr-box-shadow-outset">
                    <img src="./images/live-img2.jpg"/>
                    <h3><a href="#">野蛮生长02</a></h3>
                    <p>人长大的标志：试着听从自己内心的声音，而不去在乎外面的声
                        音，等待和拖延是世界上最容易压垮一个人得东西。犹豫不决是你
                        最大的敌人。
                    </p>
                    <p class="data-time">2016-10-12 12:00</p>
                </div>
                <div class="pic hvr-box-shadow-outset">
                    <img src="./images/live-img3.jpg"/>
                    <h3><a href="#">野蛮生长03</a></h3>
                    <p>人长大的标志：试着听从自己内心的声音，而不去在乎外面的声
                        音，等待和拖延是世界上最容易压垮一个人得东西。犹豫不决是你
                        最大的敌人。
                    </p>
                    <p class="data-time">2016-10-12 12:00</p>
                </div>
                <div class="pic hvr-box-shadow-outset">
                    <img src="./images/live-img4.jpg"/>
                    <h3><a href="#">野蛮生长04</a></h3>
                    <p>人长大的标志：试着听从自己内心的声音，而不去在乎外面的声
                        音，等待和拖延是世界上最容易压垮一个人得东西。犹豫不决是你
                        最大的敌人。能找到自己想做的事情就不容易了，
                        青春得浪费在美好事物上。
                    </p>
                    <p class="data-time">2016-10-12 12:00</p>
                </div>
                <div class="pic hvr-box-shadow-outset">
                    <img src="./images/live-img5.jpg"/>
                    <h3><a href="#">野蛮生长05</a></h3>
                    <p>人长大的标志：试着听从自己内心的声音，而不去在乎外面的声
                        音，等待和拖延是世自己想做的事情就不容易了，
                        青春得浪费在美好事物上。
                    </p>
                    <p class="data-time">2016-10-12 12:00</p>
                </div>
                <div class="pic hvr-box-shadow-outset">
                    <img src="./images/live-img6.jpg"/>
                    <h3><a href="#">野蛮生长06</a></h3>
                    <p>人长大的标志：试着不要发呆，能碎觉就不要拖延，能吃饭就不
                        要饿着，能亲吻就不要说话，能找到自己想做的事情就不容易了，
                        青春得浪费在美好事物上。
                    </p>
                    <p class="data-time">2016-10-12 12:00</p>
                </div>
                <div class="pic hvr-box-shadow-outset">
                    <img src="./images/design-img1.jpg"/>
                    <h3><a href="#">野蛮生长07</a></h3>
                    <p>人长大的标志：试着听从自己内心的声音，而不去在乎外面的声
                        音，等待和拖延是世界上最容易压垮一个人得东西。犹豫不决是你
                        最大的敌人。能看要说话，能找到自己想做的事情就不容易了，
                        青春得浪费在美好事物上。
                    </p>
                    <p class="data-time">2016-10-12 12:00</p>
                </div>
                <div class="pic hvr-box-shadow-outset">
                    <img src="./images/live-img1.jpg"/>
                    <h3><a href="#">野蛮生长08</a></h3>
                    <p>人长大的标志：试着听从自己内心的声音，而不去在乎外面的声
                        音，等待和拖延是世界上最容易压垮一个人得东西。犹豫不决是你
                        最大的敌人。能看上。
                    </p>
                    <p class="data-time">2016-10-12 12:00</p>
                </div>
                <div class="pic hvr-box-shadow-outset">
                    <img src="./images/live-img2.jpg"/>
                    <h3><a href="#">野蛮生长09</a></h3>
                    <p>人长大的标志：试着听从自己内心的声音，而不去在乎外面的声
                        音，等待不要发呆，能碎觉就不要拖延，能吃饭就不
                        要饿着，能亲吻就不要说话，能找到自己想做的事情就不容易了，
                        青春得浪费在美好事物上。
                    </p>
                    <p class="data-time">2016-10-12 12:00</p>
                </div>
                <div class="pic hvr-box-shadow-outset">
                    <img src="./images/live-img3.jpg"/>
                    <h3><a href="#">野蛮生长10</a></h3>
                    <p>人长大的标志：试着听从自己内心的声音，而不去在乎外面的声
                        音，等待和拖延是世界上最容易压垮一个人得东西。犹豫不决是你
                        最大的敌，能找到自己想做的事情就不容易了，青春得浪费在美好事物上。
                    </p>
                    <p class="data-time">2016-10-12 12:00</p>
                </div>
                <div class="pic hvr-box-shadow-outset">
                    <img src="./images/live-img4.jpg"/>
                    <h3><a href="#">野蛮生长</a></h3>
                    <p>人长大的标志：试着听从自己内心的声音，而不去在乎外面的声
                        音，等待和拖延发呆，能碎觉就不要拖延，能吃饭就不要饿着，能亲吻就不要说话，能找到自己想做的事情就不容易了，
                        青春得浪费在美好事物上。
                    </p>
                    <p class="data-time">2016-10-12 12:00</p>
                </div>
                <div class="pic hvr-box-shadow-outset">
                    <img src="./images/live-img2.jpg"/>
                    <h3><a href="#">野蛮生长</a></h3>
                    <p>人长大的标志：试着听从自己内心的声音，而不去在乎外面的声
                        音，等待和拖延是世界上最容易压垮一个人得东西。犹豫不决是你
                        找到自己想做的事情就不容易了，
                        青春得浪费在美好事物上。
                    </p>
                    <p class="data-time">2016-10-12 12:00</p>
                </div>
                <div class="pic hvr-box-shadow-outset">
                    <img src="./images/live-img1.jpg"/>
                    <h3><a href="#">野蛮生长</a></h3>
                    <p>人长大的标志：试着易压垮一个人得东西。犹豫不决是你
                        最大的敌人。能看己想做的事情就不容易了，
                        青春得浪费在美好事物上。
                    </p>
                    <p class="data-time">2016-10-12 12:00</p>
                </div>
                <div class="pic hvr-box-shadow-outset">
                    <img src="./images/live-img2.jpg"/>
                    <h3><a href="#">野蛮生长</a></h3>
                    <p>人长大的呆，能碎觉就不要拖延，能吃饭就不
                        要饿着，能亲吻就不要说话，能找到自己想做的事情就不容易了，
                        青春得浪费在美好事物上。
                    </p>
                    <p class="data-time">2016-10-12 12:00</p>
                </div>
                <div class="pic hvr-box-shadow-outset">
                    <img src="./images/live-img3.jpg"/>
                    <h3><a href="#">野蛮生长</a></h3>
                    <p>人长大的标要发呆，能碎话，能找到自己想做的事情就不容易了，青春得浪费在美好事物上。</p>
                    <p class="data-time">2016-10-12 12:00</p>
                </div>
            </div>
            <a href="live.html" class="more">查看更多>></a>
        </div>
        <div class="about-me">
            <img src="./images/about-me.jpg" class="me" alt="点击了解更多我的信息">
            <a href="about.html" class="introduction">
                <div class="hvr-float">
                    <h3>About me</h3>
                    <span class="hand"><img src="./images/hand.png" alt="点击了解更多我的信息"></span>
                </div>

                <p>设想一生，计划着成功。其实，前途无量全靠实力，端端正正才能成就自己！设想一生，计划着成功。其实，前途无量全靠实力，端端正正才能成就自己！<br>
                    设想一生，计划着成功。其实，前途无量全靠实力，端端正正才能成就自己！</p>
            </a>
        </div>
        <div class="w100 bg-white">
            <div class="links-contact">
                <div class="links">
                    <h3>Links:</h3>
                    <ul>
                        <li><a href="#">一家民宿</a></li>
                        <li><a href="#">小猪短租</a></li>
                        <li><a href="#">住百家</a></li>
                        <li><a href="#">VueConf</a></li>
                        <li><a href="#">懒人图库</a></li>
                        <li><a href="#">VueConf</a></li>
                        <li><a href="#">站酷网</a></li>
                        <li><a href="#">池建强微博</a></li>
                        <li><a href="#">尤雨溪微博</a></li>
                        <li><a href="#">狼叔微博</a></li>
                        <li><a href="#">阮一峰blog</a></li>
                        <li><a href="#">懒人图库</a></li>
                    </ul>
                </div>
                <div class="contact-me">
                    <h3>Contact me:</h3>
                    <p>邮箱：tly04059@163.com</p>
                    <p>地址：北京市海淀区中关村软件园9号楼</p>
                    <p>个人blog地址：www.tanglili.com</p>
                    <p>简书地址：http:jianshu.tanglili.com</p>
                    <div class="icon-bar">
                        <a href="javascript:void (0);" class="sina icon"></a>
                        <a href="javascript:void (0);" class="wechat icon"></a>
                        <a href="javascript:void (0);" class="qq icon"></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="thanks">
            <img src="./images/thanks-bg.png" class="thanks-bg" alt="thanks">
            <span class="introduction">
                <img src="./images/logo-white.png" alt="sunshine" class="sunshine">
                <p>我做这个blog的目的除了希望能跟更多的同行或朋友建立联系，也希望更多朋友可以通过这个blog找到我。<br>
感谢您光临我的blog，如果您有什么意见和建议，欢迎您随时与我联系，我会尽力改进，如果您希望跟我合作，也非常希望您能马上联系我。</p>
                <h3>thanks</h3>
                <p>如果您有什么意见和建议，欢迎您随时与我联系，我会尽力改进，如果您希望跟我合作，也非常希望您能马上联系我。</p>
            </span>
        </div>
        <v-footer></v-footer>
        <a href="javascript:void(0);" id="btn" title="回到顶部"></a>
    </div>
</template>

<script>
    import { goToTop } from './../../common/js/gototop';
    import Vue from 'vue';
    import {Navbar, TabItem} from 'mint-ui';
    import {Swipe, SwipeItem} from 'mint-ui';
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
    Vue.component(Navbar.name, Navbar);
    Vue.component(TabItem.name, TabItem);
    import {Indicator} from 'mint-ui';

    import 'common/css/reset.css';
    import VFooter from 'components/common/footer'
    import VHeader from 'components/common/header'

    export default {
        name: 'app',
        data(){
            return {
                content: {},
                selected: '1',
            }
        },
        mounted() {
            goToTop();
            this.$nextTick(function () {
                Indicator.open({
                    text: '加载中...',
                    spinnerType: 'fading-circle'

                });
                setTimeout(() => Indicator.close(), 2000);
            });
        },
        components: {
            VFooter, VHeader
        }
    }
</script>
<style>
    .mint-navbar {
        color: #0b6d99 !important;
    }

    .mint-navbar {
        padding: 0 30%;
        background-image: linear-gradient(#effafa 0, white 100%);
    }

    .mint-tab-container-item {
        background: #f4f4f4;
    }

    .mint-navbar .mint-tab-item .mint-tab-item-label {
        font-size: 18px !important;
    }

    .mint-indicator-wrapper {
        background: rgba(11, 109, 153, 0.7) !important;

    }
</style>
<style lang="scss" rel="stylesheet/scss" scoped>
    @import "./../../common/css/common.scss";
    .main-wrapper {
        /*background: url("images/222.jpg") no-repeat center top;*/
        /*background-size: contain;*/
    }

    .main-wrapper {
        h3.title {
            position: relative;
            padding-top: 20px;
            height: 60px;
            line-height: 60px;
            color: #0b6d99;
            font-size: 30px;
            font-weight: normal;
        }
        h3.title::after {
            content: '';
            position: absolute;
            left: 50%;
            top: 80px;
            margin-left: -50px;
            width: 100px;
            height: 3px;
            background: #0b6d99;
        }
        .min-swipe {
            width: 100%;
            height: 326px;
            display: block;
            overflow: hidden;
            &:first-child {
                background: #effafa;
            }
            img {
                width: 100%;
                height: auto;
                overflow: hidden;
            }
        }

        .frontend {
            padding-bottom: 30px;
            background: #f4f4f4;
        }
        .frontend-list {
            width: 100%;
            height: 60px;
            background-image: linear-gradient(rgba(239, 250, 250, 1) 0, rgba(255, 255, 255, 1) 100%);
            li {
                display: inline-block;
                font-size: 18px;
                line-height: 60px;
                a {
                    display: inline-block;
                    color: #0b6d99;
                    padding: 0 10px;
                }
            }
        }
        .frontend-container {
            padding: 20px;
            text-align: center;
            font-size: 0;
            li {
                display: inline-block;
                padding: 10px;
                margin: 10px;
                width: 220px;
                height: 280px;
                overflow: hidden;
                text-align: left;
                border-radius: 3px;
                background: #fff;
                img {
                    width: 100%;
                }
                h5 {
                    font-weight: normal;
                    line-height: 1;
                    margin: 10px 0 8px;
                    a {
                        display: block;
                        color: #333;
                        font-size: 16px;
                        vertical-align: middle;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;

                    }
                }
                p {
                    width: 100%;
                    height: 50px;
                    overflow: hidden;
                    font-size: 12px;
                    color: #bbb;
                    -ms-word-wrap: break-word;
                    word-wrap: break-word;
                    text-align: justify;
                }
                .issuing-time {
                    margin-top: 8px;
                    font-weight: bold;
                    /*text-align: right;*/
                }
            }
        }
        .design {
            padding-bottom: 30px;
        }
        .design-container {
            width: 100%;
            min-width: 1480px;
            margin: 50px auto 0;
        }
        .design-list {
            font-size: 0;
            li {
                position: relative;
                display: inline-block;
                width: 280px;
                height: 280px;
                font-size: 14px;
                border: 3px solid #fff;
                img {
                    width: 100%;
                    height: 100%;
                }
                vertical-align: top;

                /*.design-photo {*/
                    /*opacity: 0.7;*/
                /*}*/
                /*.design-photo:hover {*/
                    /*opacity: 1;*/
                /*}*/
            }

            .triangle-right-bottom {
                position: absolute;
                right: -12px;
                bottom: 72px;
                z-index: 2;
            }
            .triangle-left-gray {
                width: 0;
                height: 0;
                border-top: 9px solid transparent;
                border-left: 12px solid #fafafa;
                border-bottom: 9px solid transparent;
            }
            .triangle-left-bottom {
                position: absolute;
                left: 0;
                bottom: 72px;
                z-index: 1;
            }
            .triangle-left-white {
                width: 0;
                height: 0;
                border-top: 9px solid transparent;
                border-left: 12px solid #fff;
                border-bottom: 9px solid transparent;
            }
            .triangle-right-white {
                width: 0;
                height: 0;
                border-top: 9px solid transparent;
                border-right: 12px solid #fff;
                border-bottom: 9px solid transparent;
            }
            .triangle-right-top {
                position: absolute;
                right: 0;
                top: 72px;
                z-index: 1;
            }
            .triangle-right-gray {
                width: 0;
                height: 0;
                border-top: 9px solid transparent;
                border-right: 12px solid #fafafa;
                border-bottom: 9px solid transparent;
            }
            .triangle-left-top {
                position: absolute;
                left: -12px;
                top: 72px;
                z-index: 1;
            }

            .h145 {
                height: 137px;
            }
            .text-right {
                text-align: right;
            }
            .text-left {
                text-align: left;
            }
            .border-top-3 {
                border-top: 3px solid #fff;
            }
            .border-bottom-3 {
                border-bottom: 3px solid #fff;
            }
            .info {
                padding: 20px;
                color: #fff;
                background: #fafafa;
                a{
                    display: inline-block;
                }
                .design-class {
                    display: inline-block;
                    width: 160px;
                    font-size: 40px;
                    color: #ddd;
                    font-weight: normal;
                    line-height: 1;
                    border-bottom: 1px solid #ddd;
                }
                .company {
                    padding: 5px 0 0;
                    color: #333;
                    line-height: 1;
                    font-size: 14px;
                }
                .time {
                    color: #999;
                }
                .address {
                    color: #9e7e6b;
                    margin-top: 10px;
                    font-size: 12px;
                }
            }
        }
        .live {
            padding-bottom: 50px;
        }
        .live-container {
            width: 85%;
            margin: 50px auto 0;

            -moz-column-count: 5;
            -moz-column-gap: 15px;
            -moz-column-rule: 0 solid #ff0000;

            -webkit-column-count: 5;
            -webkit-column-gap: 15px;
            -webkit-column-rule: 0 solid #ff0000;

            .pic {
                display: inline-block;
                margin: 10px;
                padding: 15px;
                width: 100%;
                min-height: 100px;
                text-align: left;
                background: #fff;
                /*box-shadow: 1px 3px 0 1px #ddd;*/
                img {
                    width: 100%;
                    border-radius: 8px;
                }
            }
            .data-time {
                position: relative;
                margin-top: 10px;
                padding-top: 10px;
                /*line-height: 2;*/
                color: #b0b0b0;
            }
            .data-time::after {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                display: block;
                width: 30px;
                height: 1px;
                background: #ddd;
            }
            h3 {
                line-height: 30px;
                padding: 5px;
                margin-bottom: 5px;
                border-bottom: 1px solid #eaeaea;
                a {
                    text-decoration: none;
                    color: #999;
                }
            }
            p {
                font-size: 12px;
                color: #666;
                line-height: 20px;
            }

        }
        .about-me {
            position: relative;
            min-width: 1480px;
            width: 100%;
            height: 520px;
            overflow: hidden;
            img.me {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: auto;
                min-height: 520px;
                z-index: 0;
            }
            .introduction {
                display: block;
                position: absolute;
                left: 0;
                bottom: 0;
                right: 0;
                top: 0;
                width: 100%;
                height: 100%;
                color: #fff;
                background: rgba(0, 0, 0, .6);
                z-index: 2;
                cursor: pointer;
                h3 {
                    margin: 100px auto 140px;
                    width: 170px;
                    height: 90px;
                    line-height: 90px;
                    font-size: 32px;
                    border-bottom: 2px solid #0b6d99;

                }
                p {
                    line-height: 1.8;
                    opacity: 0.8;
                }
                .hand {
                    position: absolute;
                    left: 50%;
                    top: 220px;
                    margin-left: -15px;
                    display: block;
                    width: 39px;
                    height: 45px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

            }

        }
        .links-contact {
            margin: 0 auto;
            padding: 45px 0;
            width: 800px;
            font-size: 0;
            background: #fff;
            .links, .contact-me {
                width: 400px;
                display: inline-block;
                vertical-align: top;
                color: #6a6a6a;
                font-size: 0;
                text-align: left;
                h3 {
                    font-size: 30px;
                    padding-bottom: 20px;
                    font-weight: normal;
                    font-family: SansSerif, sans-serif, Sana;
                }

            }
            .links {
                padding-right: 100px;
                ul li {
                    display: inline-block;
                    width: 50%;
                    line-height: 26px;
                }
                a {
                    display: inline-block;
                    font-size: 16px;
                    color: #6a6a6a;
                    font-family: SansSerif, sans-serif, Sana;
                }
            }
            .contact-me {
                padding-left: 80px;
                p {
                    line-height: 30px;
                    font-size: 16px;
                    font-family: SansSerif, sans-serif, Sana;

                }
                .icon-bar {
                    margin-top: 15px;
                }
                .icon {
                    margin-right: 10px;
                    display: inline-block;
                    width: 50px;
                    height: 50px;
                }
                .sina {
                    background: url("./images/sina-gray.png") no-repeat center top;
                    -webkit-background-size: 100%;
                    background-size: 100%;
                }
                .sina:hover, .sina:active {
                    background: url("./images/sina-blue.png") no-repeat center top;
                    -webkit-background-size: 100%;
                    background-size: 100%;
                }
                .wechat {
                    background: url("./images/wechat-gray.png") no-repeat center top;
                    -webkit-background-size: 100%;
                    background-size: 100%;
                }
                .wechat:hover, .wechat:active {
                    background: url("./images/wechat-blue.png") no-repeat center top;
                    -webkit-background-size: 100%;
                    background-size: 100%;
                }
                .qq {
                    background: url("./images/qq-gray.png") no-repeat center top;
                    -webkit-background-size: 100%;
                    background-size: 100%;
                }
                .qq:hover, .qq:active {
                    background: url("./images/qq-blue.png") no-repeat center top;
                    -webkit-background-size: 100%;
                    background-size: 100%;
                }
            }
        }
        .thanks {
            position: relative;

            min-width: 1480px;
            width: 100%;
            height: 400px;
            overflow: hidden;
            img.thanks-bg {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: auto;
                min-height: 400px;
                z-index: 0;
            }
            .introduction {
                display: block;
                position: absolute;
                left: 0;
                bottom: 0;
                right: 0;
                top: 0;
                padding: 40px 0;
                width: 100%;
                height: 100%;
                color: #fff;
                background: rgba(11, 109, 153, .6);
                z-index: 2;
                cursor: pointer;
                img.sunshine {
                    margin: 10px auto 40px;
                    width: 207px;
                    height: 65px;
                }
                h3 {
                    margin: 40px auto 15px;
                    width: 110px;
                    height: 50px;
                    line-height: 50px;
                    font-size: 36px;
                    font-family: Georgia, Cochin;
                    border-bottom: 2px solid rgba(255, 255, 255, 0.4);

                }
                p {
                    line-height: 1.8;
                }

            }

        }

    }


</style>
