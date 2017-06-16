<template>
    <div id="app" class="w100 main-wrapper">
        <v-header :isActive=4></v-header>
        <h3>生活详情</h3>

        <div>
            <img src="./images/pic.jpg" alt="">
            <img src="./images/pic.jpg" alt="">
            <img src="./images/pic.jpg" alt="">
            <img src="./images/pic.jpg" alt="">
            <img src="./images/pic.jpg" alt="">
            <img src="./images/pic.jpg" alt="">
            <img src="./images/pic.jpg" alt="">
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

    /*.about-bg {*/
    /*background: url(./images/bg14.jpg) no-repeat center top;*/
    /*background-size: cover;*/
    /*}*/

    .about-me {
        width: 60%;
        min-width: 1200px;
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
                width: 24.7%;
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
