var animates = {
    animate: function (el, target, callback) {
        //当不断点击按钮时，盒子会越走越快，是因为我们不停的调用定时器
        //解决的方式就是让元素只有一个定时器
        //先清除以前的定时器，只保留当前的一个定时器执行
        clearInterval(el.Timer)
        el.Timer = setInterval(function () {//用对象的方式避免命名冲突，能优化性能
            //缓动效果
            var slowMotion = (target - el.offsetLeft) / 10;
            slowMotion = slowMotion > 0 ? Math.ceil(slowMotion) : Math.floor(slowMotion);
            if (el.offsetLeft == target) {
                clearInterval(el.Timer)
                // if (callback) {
                //     callback();
                // }
                callback && callback();//类似短路原理，如果为真则调用，如果为假则不调用；
            }
            else { el.style.left = el.offsetLeft + slowMotion + "px"; }
        }, 15)
    },
};