<template>
    <div class="v-header">
        <a :href="link.hrefUrl" class="hvr-underline-from-center"
           v-for="(link, index) in linksList"
           v-bind:class="{ 'current':isActive === index }">{{ link.text}}</a>
    </div>
</template>

<script>
    export default {
        name: 'v-header',
        data () {
            return {
                linksList: [
                    {text: 'Home', hrefUrl: 'index.html'},
                    {text: 'FrontEnd', hrefUrl: 'frontend.html'},
                    {text: 'Design', hrefUrl: 'design.html'},
                    {text: 'Live', hrefUrl: 'live.html'},
                    {text: 'About', hrefUrl: 'about.html'},
                ]
            }
        },
        props: {
            isActive: {
                type: Number,
                default: 0,
                validator(t) {
                    return [
                            0,
                            1,
                            2,
                            3,
                            4
                        ].indexOf(t) > -1;
                }
            },
        },
        methods: {
            switchTab: function (index) {
                this.isActive = index;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
    .hvr-underline-from-center {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -moz-osx-font-smoothing: grayscale;
        position: relative;
        overflow: hidden;
    }

    .hvr-underline-from-center:before {
        content: "";
        position: absolute;
        z-index: -1;
        left: 50%;
        right: 50%;
        bottom: 0;
        background: #0b6d99;
        height: 4px;
        -webkit-transition-property: left, right;
        transition-property: left, right;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }

    .hvr-underline-from-center:hover:before, .hvr-underline-from-center:focus:before, .hvr-underline-from-center:active:before {
        left: 0;
        right: 0;
    }

    .v-header {
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: rgba(11, 109, 153, .4);
        a {
            display: inline-block;
            padding: 0 30px;
            text-align: center;
            color: #fff;
            font-weight: bold;
        }
    }
    .current {
        position: relative;
    }
    .current::before {
        content: '';
        position: absolute;
        z-index: -1;
        left: 0;
        right: 0;
        bottom: 0;
        background: #0b6d99;
        height: 4px;
        width: 100%;
    }
</style>
