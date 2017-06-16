<template>
    <div id="app" class="w100 frontend-wrapper bg-gray">
        <v-header :isActive=1></v-header>
        <div class="big-img-bg">
            <img src="./images/banner-bg.jpg" alt="不想做只会敲代码的程序媛，想做自己人生的产品经理。" class="big-img">
            <div class="mask">
                <h3>不想做只会coding的程序媛，想做自己人生的产品经理。</h3>
            </div>
        </div>
        <div class="w100 frontend-bg">
            <div class="container">
                <div class="technology-list">
                    <mt-navbar class="page-part" v-model="selected">
                        <mt-tab-item id="1">全部</mt-tab-item>
                        <mt-tab-item id="2">HTML</mt-tab-item>
                        <mt-tab-item id="3">CSS</mt-tab-item>
                        <mt-tab-item id="4">JS</mt-tab-item>
                        <mt-tab-item id="5">Vue</mt-tab-item>
                        <mt-tab-item id="6">SASS</mt-tab-item>
                        <mt-tab-item id="7">Git</mt-tab-item>
                        <mt-tab-item id="8">iTerm2</mt-tab-item>
                    </mt-navbar>
                    <mt-tab-container v-model="selected">
                        <mt-tab-container-item id="1">
                            <ul>
                                <li class="hvr-shadow-radial">
                                    <a href="frontend-detail.html">
                                        <img src="./images/frontend-img4.jpg" alt="frontend-img1">
                                        <div class="Introduction">
                                            <h4>vue 动态修改a标签的样式</h4>
                                            <p>
                                                公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                            <p class="issuing-time">发布时间：3小时前</p>
                                        </div>
                                    </a>
                                </li>
                                <li class="hvr-shadow-radial">
                                    <a href="frontend-detail.html">
                                        <img src="./images/frontend-img5.jpg" alt="frontend-img1">
                                        <div class="Introduction">
                                            <h4>vue 动态修改a标签的样式</h4>
                                            <p>
                                                公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                            <p class="issuing-time">发布时间：3小时前</p>
                                        </div>
                                    </a>
                                </li>
                                <li class="hvr-shadow-radial">
                                    <a href="frontend-detail.html">
                                        <img src="./images/frontend-img6.jpg" alt="frontend-img1">
                                        <div class="Introduction">
                                            <h4>vue 动态修改a标签的样式</h4>
                                            <p>
                                                公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                            <p class="issuing-time">发布时间：3小时前</p>
                                        </div>
                                    </a>
                                </li>
                                <li class="hvr-shadow-radial">
                                    <a href="frontend-detail.html">
                                        <img src="./images/frontend-img7.jpg" alt="frontend-img1">
                                        <div class="Introduction">
                                            <h4>vue 动态修改a标签的样式</h4>
                                            <p>
                                                公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                            <p class="issuing-time">发布时间：3小时前</p>
                                        </div>
                                    </a>
                                </li>
                                <li class="hvr-shadow-radial">
                                    <img src="./images/frontend-img1.jpg" alt="frontend-img1">
                                    <div class="Introduction">
                                        <h4>vue 动态修改a标签的样式</h4>
                                        <p>
                                            公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                        <p class="issuing-time">发布时间：3小时前</p>
                                    </div>
                                </li>
                                <li class="hvr-shadow-radial">
                                    <img src="./images/frontend-img2.jpg" alt="frontend-img1">
                                    <div class="Introduction">
                                        <h4>vue 动态修改a标签的样式</h4>
                                        <p>
                                            公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                        <p class="issuing-time">发布时间：3小时前</p>
                                    </div>
                                </li>
                                <li class="hvr-shadow-radial">
                                    <img src="./images/frontend-img3.jpg" alt="frontend-img1">
                                    <div class="Introduction">
                                        <h4>vue 动态修改a标签的样式</h4>
                                        <p>
                                            公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                        <p class="issuing-time">发布时间：3小时前</p>
                                    </div>
                                </li>
                                <li class="hvr-shadow-radial">
                                    <img src="./images/frontend-img4.jpg" alt="frontend-img1">
                                    <div class="Introduction">
                                        <h4>vue 动态修改a标签的样式</h4>
                                        <p>
                                            公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                        <p class="issuing-time">发布时间：3小时前</p>
                                    </div>
                                </li>
                                <li class="hvr-shadow-radial">
                                    <img src="./images/frontend-img5.jpg" alt="frontend-img1">
                                    <div class="Introduction">
                                        <h4>vue 动态修改a标签的样式</h4>
                                        <p>
                                            公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                        <p class="issuing-time">发布时间：3小时前</p>
                                    </div>
                                </li>
                                <li class="hvr-shadow-radial">
                                    <img src="./images/frontend-img6.jpg" alt="frontend-img1">
                                    <div class="Introduction">
                                        <h4>vue 动态修改a标签的样式</h4>
                                        <p>
                                            公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                        <p class="issuing-time">发布时间：3小时前</p>
                                    </div>
                                </li>
                                <li class="hvr-shadow-radial">
                                    <img src="./images/frontend-img7.jpg" alt="frontend-img1">
                                    <div class="Introduction">
                                        <h4>vue 动态修改a标签的样式</h4>
                                        <p>
                                            公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                        <p class="issuing-time">发布时间：3小时前</p>
                                    </div>
                                </li>
                            </ul>
                        </mt-tab-container-item>
                        <mt-tab-container-item id="2">
                            <ul>
                                <li class="hvr-shadow-radial">
                                    <img src="./images/frontend-img4.jpg" alt="frontend-img1">
                                    <div class="Introduction">
                                        <h4>vue 动态修改a标签的样式</h4>
                                        <p>
                                            公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                        <p class="issuing-time">发布时间：3小时前</p>
                                    </div>
                                </li>
                                <li class="hvr-shadow-radial">
                                    <img src="./images/frontend-img5.jpg" alt="frontend-img1">
                                    <div class="Introduction">
                                        <h4>vue 动态修改a标签的样式</h4>
                                        <p>
                                            公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                        <p class="issuing-time">发布时间：3小时前</p>
                                    </div>
                                </li>
                                <li class="hvr-shadow-radial">
                                    <img src="./images/frontend-img6.jpg" alt="frontend-img1">
                                    <div class="Introduction">
                                        <h4>vue 动态修改a标签的样式</h4>
                                        <p>
                                            公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                        <p class="issuing-time">发布时间：3小时前</p>
                                    </div>
                                </li>
                            </ul>
                        </mt-tab-container-item>
                        <mt-tab-container-item id="3">
                            <ul>
                                <li class="hvr-shadow-radial">
                                    <img src="./images/frontend-img4.jpg" alt="frontend-img1">
                                    <div class="Introduction">
                                        <h4>vue 动态修改a标签的样式</h4>
                                        <p>
                                            公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                        <p class="issuing-time">发布时间：3小时前</p>
                                    </div>
                                </li>
                                <li class="hvr-shadow-radial">
                                    <img src="./images/frontend-img5.jpg" alt="frontend-img1">
                                    <div class="Introduction">
                                        <h4>vue 动态修改a标签的样式</h4>
                                        <p>
                                            公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                        <p class="issuing-time">发布时间：3小时前</p>
                                    </div>
                                </li>
                                <li class="hvr-shadow-radial">
                                    <img src="./images/frontend-img6.jpg" alt="frontend-img1">
                                    <div class="Introduction">
                                        <h4>vue 动态修改a标签的样式</h4>
                                        <p>
                                            公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                        <p class="issuing-time">发布时间：3小时前</p>
                                    </div>
                                </li>
                                <li class="hvr-shadow-radial">
                                    <img src="./images/frontend-img7.jpg" alt="frontend-img1">
                                    <div class="Introduction">
                                        <h4>vue 动态修改a标签的样式</h4>
                                        <p>
                                            公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                        <p class="issuing-time">发布时间：3小时前</p>
                                    </div>
                                </li>
                            </ul>
                        </mt-tab-container-item>
                        <mt-tab-container-item id="4">
                            <ul>
                                <li class="hvr-shadow-radial">
                                    <img src="./images/frontend-img4.jpg" alt="frontend-img1">
                                    <div class="Introduction">
                                        <h4>vue 动态修改a标签的样式</h4>
                                        <p>
                                            公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                        <p class="issuing-time">发布时间：3小时前</p>
                                    </div>
                                </li>
                                <li class="hvr-shadow-radial">
                                    <img src="./images/frontend-img5.jpg" alt="frontend-img1">
                                    <div class="Introduction">
                                        <h4>vue 动态修改a标签的样式</h4>
                                        <p>
                                            公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                        <p class="issuing-time">发布时间：3小时前</p>
                                    </div>
                                </li>
                                <li class="hvr-shadow-radial">
                                    <img src="./images/frontend-img6.jpg" alt="frontend-img1">
                                    <div class="Introduction">
                                        <h4>vue 动态修改a标签的样式</h4>
                                        <p>
                                            公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                        <p class="issuing-time">发布时间：3小时前</p>
                                    </div>
                                </li>
                                <li class="hvr-shadow-radial">
                                    <img src="./images/frontend-img7.jpg" alt="frontend-img1">
                                    <div class="Introduction">
                                        <h4>vue 动态修改a标签的样式</h4>
                                        <p>
                                            公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                        <p class="issuing-time">发布时间：3小时前</p>
                                    </div>
                                </li>
                            </ul>
                        </mt-tab-container-item>
                        <mt-tab-container-item id="5">
                            <ul>
                                <li>
                                    <img src="./images/frontend-img6.jpg" alt="frontend-img1">
                                    <div class="Introduction">
                                        <h4>vue 动态修改a标签的样式</h4>
                                        <p>
                                            公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                        <p class="issuing-time">发布时间：3小时前</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="./images/frontend-img7.jpg" alt="frontend-img1">
                                    <div class="Introduction">
                                        <h4>vue 动态修改a标签的样式</h4>
                                        <p>
                                            公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                        <p class="issuing-time">发布时间：3小时前</p>
                                    </div>
                                </li>
                            </ul>
                        </mt-tab-container-item>
                        <mt-tab-container-item id="6">
                            <ul>
                                <li class="hvr-shadow-radial">
                                    <img src="./images/frontend-img2.jpg" alt="frontend-img1">
                                    <div class="Introduction">
                                        <h4>vue 动态修改a标签的样式</h4>
                                        <p>
                                            公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                        <p class="issuing-time">发布时间：3小时前</p>
                                    </div>
                                </li>
                                <li class="hvr-shadow-radial">
                                    <img src="./images/frontend-img3.jpg" alt="frontend-img1">
                                    <div class="Introduction">
                                        <h4>vue 动态修改a标签的样式</h4>
                                        <p>
                                            公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                        <p class="issuing-time">发布时间：3小时前</p>
                                    </div>
                                </li>
                                <li class="hvr-shadow-radial">
                                    <img src="./images/frontend-img4.jpg" alt="frontend-img1">
                                    <div class="Introduction">
                                        <h4>vue 动态修改a标签的样式</h4>
                                        <p>
                                            公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                        <p class="issuing-time">发布时间：3小时前</p>
                                    </div>
                                </li>
                                <li class="hvr-shadow-radial">
                                    <img src="./images/frontend-img5.jpg" alt="frontend-img1">
                                    <div class="Introduction">
                                        <h4>vue 动态修改a标签的样式</h4>
                                        <p>
                                            公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                        <p class="issuing-time">发布时间：3小时前</p>
                                    </div>
                                </li>
                            </ul>
                        </mt-tab-container-item>
                        <mt-tab-container-item id="7">
                            <ul>
                                <li class="hvr-shadow-radial">
                                    <img src="./images/frontend-img7.jpg" alt="frontend-img1">
                                    <div class="Introduction">
                                        <h4>vue 动态修改a标签的样式</h4>
                                        <p>
                                            公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                        <p class="issuing-time">发布时间：3小时前</p>
                                    </div>
                                </li>
                                <li class="hvr-shadow-radial">
                                    <img src="./images/frontend-img1.jpg" alt="frontend-img1">
                                    <div class="Introduction">
                                        <h4>vue 动态修改a标签的样式</h4>
                                        <p>
                                            公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                        <p class="issuing-time">发布时间：3小时前</p>
                                    </div>
                                </li>
                                <li class="hvr-shadow-radial">
                                    <img src="./images/frontend-img2.jpg" alt="frontend-img1">
                                    <div class="Introduction">
                                        <h4>vue 动态修改a标签的样式</h4>
                                        <p>
                                            公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                        <p class="issuing-time">发布时间：3小时前</p>
                                    </div>
                                </li>
                                <li class="hvr-shadow-radial">
                                    <img src="./images/frontend-img3.jpg" alt="frontend-img1">
                                    <div class="Introduction">
                                        <h4>vue 动态修改a标签的样式</h4>
                                        <p>
                                            公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                        <p class="issuing-time">发布时间：3小时前</p>
                                    </div>
                                </li>
                            </ul>
                        </mt-tab-container-item>
                        <mt-tab-container-item id="8">
                            <ul>
                                <li class="hvr-shadow-radial">
                                    <img src="./images/frontend-img5.jpg" alt="frontend-img1">
                                    <div class="Introduction">
                                        <h4>vue 动态修改a标签的样式</h4>
                                        <p>
                                            公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                        <p class="issuing-time">发布时间：3小时前</p>
                                    </div>
                                </li>
                                <li class="hvr-shadow-radial">
                                    <img src="./images/frontend-img6.jpg" alt="frontend-img1">
                                    <div class="Introduction">
                                        <h4>vue 动态修改a标签的样式</h4>
                                        <p>
                                            公司要做一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导一个类似今日头条的项目，用前后端分离的方式做成HTML5页面，先在微信中运行，领导</p>
                                        <p class="issuing-time">发布时间：3小时前</p>
                                    </div>
                                </li>
                            </ul>
                        </mt-tab-container-item>
                    </mt-tab-container>
                </div>
                <div class="recommend">
                    <div class="new">
                        <h3>最新文章</h3>
                        <ul>
                            <li><a href="javascript:void (0);">vue 动态修改a标签的样式</a> <span>2016-2-25</span></li>
                            <li><a href="javascript:void (0);">在vue2.0项目中一个简单的倒计时功能</a> <span>2016-2-25</span></li>
                            <li><a href="javascript:void (0);">vue-router 2.0 常用基础知识点之router.push()</a>
                                <span>2016-2-25 </span></li>
                            <li><a href="javascript:void (0);">vue-router 2.0 常用基础知识点之导航钩子 </a> <span>2016-2-25 </span>
                            </li>
                            <li><a href="javascript:void (0);">非常有用的CSS代码片段 </a><span>2016-2-25</span></li>
                            <li><a href="javascript:void (0);">常用网站链接</a> <span>2016-2-25</span></li>
                            <li><a href="javascript:void (0);">vue 动态修改a标签的样式 </a> <span>2016-2-25</span></li>
                        </ul>
                    </div>
                    <div class="popular">
                        <h3>最热门文章</h3>
                        <ul>
                            <li><a href="javascript:void (0);">vue 动态修改a标签的样式</a> <span>2016-2-25</span></li>
                            <li><a href="javascript:void (0);">在vue2.0项目中一个简单的倒计时功能</a> <span>2016-2-25</span></li>
                            <li><a href="javascript:void (0);">vue-router 2.0 常用基础知识点之router.push()</a>
                                <span>2016-2-25 </span></li>
                            <li><a href="javascript:void (0);">vue-router 2.0 常用基础知识点之导航钩子 </a> <span>2016-2-25 </span>
                            </li>
                            <li><a href="javascript:void (0);">非常有用的CSS代码片段 </a><span>2016-2-25</span></li>
                            <li><a href="javascript:void (0);">常用网站链接</a> <span>2016-2-25</span></li>
                            <li><a href="javascript:void (0);">vue 动态修改a标签的样式 </a> <span>2016-2-25</span></li>
                        </ul>
                    </div>
                    <div class="const">
                        <h3>最常用文章</h3>
                        <ul>
                            <li><a href="javascript:void (0);">vue 动态修改a标签的样式</a> <span>2016-2-25</span></li>
                            <li><a href="javascript:void (0);">在vue2.0项目中一个简单的倒计时功能</a> <span>2016-2-25</span></li>
                            <li><a href="javascript:void (0);">vue-router 2.0 常用基础知识点之router.push()</a>
                                <span>2016-2-25 </span></li>
                            <li><a href="javascript:void (0);">vue-router 2.0 常用基础知识点之导航钩子 </a> <span>2016-2-25 </span>
                            </li>
                            <li><a href="javascript:void (0);">非常有用的CSS代码片段 </a><span>2016-2-25</span></li>
                            <li><a href="javascript:void (0);">常用网站链接</a> <span>2016-2-25</span></li>
                            <li><a href="javascript:void (0);">vue 动态修改a标签的样式 </a> <span>2016-2-25</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <v-footer></v-footer>
        <a href="javascript:void(0);" id="btn" title="回到顶部"></a>
    </div>
</template>

<script>
    import 'common/css/reset.css';
    import {goToTop} from './../../common/js/gototop';
    import VFooter from 'components/common/footer';
    import VHeader from 'components/common/header';
    import Vue from 'vue';
    import {Navbar, TabItem} from 'mint-ui';
    Vue.component(Navbar.name, Navbar);
    Vue.component(TabItem.name, TabItem);
    export default {
        name: 'app',
        data(){
            return {
                selected: '1',
            }
        },
        mounted() {
            goToTop();
        },
        components: {
            VFooter, VHeader
        }
    }
</script>
<style>
    .mint-navbar {
        padding: 0 10%;
    }

    .mint-navbar .mint-tab-item .mint-tab-item-label {
        font-size: 18px !important;;
    }

    .mint-tab-container {
        background: #fff;
    }

    .mint-navbar {
        border-bottom: 1px solid #f4f4f4;
    }
</style>
<style lang="scss" rel="stylesheet/scss" scoped>
    @import "./../../common/css/common";

    .frontend-bg {
        background: url(./images/bg1.jpg) no-repeat fixed center top;
        background-size: cover;
    }

    .frontend-wrapper {


        .container {
            position: relative;
            margin-left: auto;
            margin-right: auto;
            padding-top: 20px;
            padding-bottom: 40px;
            width: 70%;
            text-align: left;
            .technology-list {
                width: 67%;
                min-height: 800px;
                font-size: 0;
                /*background: #fff;*/
                li {
                    padding: 20px 20px;
                    font-size: 0;
                    border-bottom: 1px solid #f6f6f6;
                    img {
                        /*margin-right: 20px;*/
                        display: inline-block;
                        width: 26%;
                        height: 140px;
                        vertical-align: top;
                    }
                    .Introduction {
                        padding-left: 20px;
                        width: 72%;
                        display: inline-block;
                        vertical-align: top;
                        h4 {
                            margin-bottom: 10px;
                            font-size: 16px;
                            color: #444;
                            line-height: 1.3;
                        }
                        p {
                            font-size: 14px;
                            color: #848383;
                        }
                        p.issuing-time {
                            margin-top: 10px;
                            color: #cfcfcf;

                        }
                    }
                }
            }
            .recommend {
                position: absolute;
                right: 0;
                top: 20px;
                width: 30%;
            }
            .new, .popular, .const {
                margin-bottom: 20px;
                padding: 15px;
                background: #fff;
                h3 {
                    margin-bottom: 10px;
                    padding-bottom: 6px;
                    width: 100%;
                    color: #444;
                    font-size: 16px;
                    border-bottom: 1px solid #f6f6f6;
                }
                ul {
                    li {
                        font-size: 0;
                    }
                }
                a {
                    display: inline-block;
                    width: 73%;
                    color: #444;
                    line-height: 1.4;
                    font-size: 14px;
                    vertical-align: middle;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                a:hover {
                    color: #0b6d99;
                }
                span {
                    display: inline-block;
                    width: 27%;
                    text-align: right;
                    color: #9b9a9a;
                    font-size: 12px;
                }
            }
        }
        .frontend-list {
            padding-left: 7%;
            height: 60px;
            margin: 20px auto 0;
            width: 70%;
            text-align: left;
            li {
                display: inline-block;
                font-size: 18px;
                line-height: 40px;
                a {
                    display: inline-block;
                    color: #a8a8a8;
                    padding: 0 10px;
                }
                a.current {
                    border-bottom: 2px solid #cacaca;
                }
            }
        }

    }

    /* Shadow Radial */
    .hvr-shadow-radial {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -moz-osx-font-smoothing: grayscale;
        position: relative;
    }

    .hvr-shadow-radial:before, .hvr-shadow-radial:after {
        pointer-events: none;
        position: absolute;
        content: '';
        left: 0;
        width: 100%;
        box-sizing: border-box;
        background-repeat: no-repeat;
        height: 5px;
        opacity: 0;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: opacity;
        transition-property: opacity;
    }

    .hvr-shadow-radial:before {
        bottom: 100%;
        background: -webkit-radial-gradient(ellipse at 50% 150%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%);
        background: radial-gradient(ellipse at 50% 150%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%);
    }

    .hvr-shadow-radial:after {
        top: 100%;
        background: -webkit-radial-gradient(50% -50%, ellipse, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%);
        background: radial-gradient(ellipse at 50% -50%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%);
    }

    .hvr-shadow-radial:hover:before, .hvr-shadow-radial:focus:before, .hvr-shadow-radial:active:before, .hvr-shadow-radial:hover:after, .hvr-shadow-radial:focus:after, .hvr-shadow-radial:active:after {
        opacity: 1;
    }

</style>

