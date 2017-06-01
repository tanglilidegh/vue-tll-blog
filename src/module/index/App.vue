<template>
    <div id="app">
        <img src="./images/logo.png">
        <hello></hello>
        <a href="frondend.html">前端技术</a>
        <a href="design.html">设计</a>
        <a href="live.html">生活</a>
        <a href="about.html">关于我</a>
        <a href="index.html">sunshine</a>
        <div>
            <!--<p>{{ content.objectId }</p>-->
            <!--<p v-for="item in content">{{ item }}</p>-->
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import AV from 'leancloud-storage';

    let APP_ID = 'NIBvX6tQOTPhLV3tY00uPii6-gzGzoHsz';
    let APP_KEY = 'bkLlTnqDmOrBEKTkqCnsUO92';

    // 初始化LeanCloud SDK
    AV.init({
        appId: APP_ID,
        appKey: APP_KEY
    });

    import 'common/css/reset.css';
    import Hello from 'components/Hello/Hello'
//    console.log(AV);
      const TestObject = AV.Object.extend('TestObject');
      const testObject = new TestObject();
      testObject.save({ words: 'Hello World!' });
//      alert('LeanCloud Rocks!');
//
//    // 该语句应该只声明一次
//    var TestObject2 = AV.Object.extend('DataTypeTest');
//    var number = 2014;
//    var string = 'famous film name is ' + number;
//    var date = new Date();
//    var array = [string, number];
//    var object = {number: number, string: string};
//    var testObject2 = new TestObject2();
//    testObject2.set('testNumber', number);
//    testObject2.set('testString', string);
//    testObject2.set('testDate', date);
//    testObject2.set('testArray', array);
//    testObject2.set('testObject', object);
//    testObject2.set('testNull', null);
//    testObject2.save().then(function (testObject2) {
//        console.log(testObject2);
//        // 成功
//    }, function (error) {
//        console.log(333);
//        // 失败
//    });
//
//    // 声明类型
//    var TodoFolder = AV.Object.extend('TodoFolder');
//    // 新建对象
//    var todoFolder = new TodoFolder();
//    // 设置名称
//    todoFolder.set('name', '工作');
//    // 设置优先级
//    todoFolder.set('priority', 1);
//    todoFolder.save().then(function (todo) {
//        console.log('objectId is ' + todo.id);
//    }, function (error) {
//        console.log(error);
//    });
//
//    new AV.Query('DataTypeTest').first()
//        .then(function (data) {
//            var members = data;
//            console.log(111);
//            console.log(JSON.stringify(members));
//            console.log(222);
//            var currentVersion = members.get('version');
//            members.set('version', currentVersion + 1);
//            members.save(null, {
//                query: new AV.Query('members').equalTo('version', currentVersion)
//            }).then(function (data) {
//                console.log(JSON.stringify(data));
//            }, function (error) {
//                if (error) {
//                    throw error;
//                }
//            });
//        }, function (error) {
//            if (error) {
//                throw error;
//            }
//        });
//
//
    export default {
        name: 'app',
        data(){
            return {
                content: {},
            }
        },
        mounted() {
            let _this = this;
            var query = new AV.Query('TestObject');
            query.get('5927d9fb0ce46300575d5957').then(function (data) {
                console.log("aaa", JSON.stringify(data), "bbb");
                _this.content = data;
            }, function (error) {
                // 失败了
            });
        },
        components: {
            Hello
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
