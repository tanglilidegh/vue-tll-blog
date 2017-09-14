const goToTop = function () {
    var btn = document.getElementById('btn');
    // 获取视界高度；
    var winH = document.documentElement.clientHeight;
    // 定义计时器；
    var timer = null;
    // 定义是否抵达顶部布尔值判断；
    var isTop = true;
    // 设置滚动事件；
    window.onscroll = function () {
        var toTop = document.body.scrollTop || document.documentElement.scrollTop;
        // 判断是否到了第二屏，若是，显示按钮；
        if (toTop >= winH) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
        // 判断是否抵达顶部，若否，停止计时器；
        if (!isTop) {
            clearInterval(timer);
        }
        // 重置布尔值判断；
        isTop = false;
    };
    // 设置按钮单击事件；
    btn.onclick = function () {
        // 设置计时器，50毫秒间隔；
        timer = setInterval(function () {
            var toTop = document.body.scrollTop || document.documentElement.scrollTop;
            // 设置速度，用等式而不用具体数值是为了产生缓动效果；
            var speed = Math.ceil(toTop / 5);
            // 作差，产生缓动效果；
            document.documentElement.scrollTop = document.body.scrollTop = toTop - speed;
            // 重置布尔值判断；
            isTop = true;
            // 判断是否抵达顶部，若是，停止计时器；
            if (toTop == 0) {
                clearInterval(timer);
            }
        }, 50);
    }
};
const backToTop = function () {
    var compatMode = document.compatMode,
        isChrome = window.navigator.userAgent.indexOf("Chrome") === -1 ? false : true,
        scrollEle = compatMode === "BackCompat" || isChrome ? document.body : document.documentElement,
        clientEle = compatMode === "BackCompat" ? document.body : document.documentElement,
        toTopImg = document.getElementById("backToTop"),
        rate = 0.8,
        timeGap = 20;
//返回顶部图标的点击响应
    toTopImg.onclick = function () {
        var moveInterval = setInterval(moveScroll, timeGap);

        function moveScroll() {
            var scrollTop = scrollEle.scrollTop;
            if (scrollTop === 0) {
                clearInterval(moveInterval);
                return;
            }
            scrollEle.scrollTop = scrollTop * rate;
        }
    };
//滚动时判断是否显示返回顶部图标
    window.onscroll = function () {
        var display = toTopImg.style.display;
        if (scrollEle.scrollTop > 200) {
            if (display !== "block") {
                toTopImg.style.display = "block";
            }
        } else {
            if (display !== "none") {
                toTopImg.style.display = "none";
            }
        }
    };
}
module.exports = {
    goToTop,
    backToTop
};
