window.addEventListener('load', function () {
    // 获取元素
    var arrow_l = document.querySelector(".arrow-l");
    var arrow_r = document.querySelector(".arrow-r");
    var banner = document.querySelector(".banner");
    var bannerWidth = banner.offsetWidth;
    // 鼠标经过显示左右按钮
    banner.addEventListener("mouseenter", function () {
        arrow_l.style.display = "block";
        arrow_r.style.display = "block";
        clearInterval(timer);//清除定时器
        timer = null;//重新给变量赋值清空变量
    });
    // 鼠标离开隐藏左右按钮
    banner.addEventListener("mouseleave", function () {
        arrow_l.style.display = "none";
        arrow_r.style.display = "none";
        timer = setInterval(function () {
            arrow_r.click();
        }, 2000);
    });
    // 根据图片的个数，动态生成小圆圈
    var ul = document.querySelector("ul");
    var ol = document.querySelector("ol");
    for (var i = 0; i < ul.children.length; i++) {
        // 依据图片个数动态创建li
        var li = document.createElement("li");
        // 将li追加到ol上面
        ol.appendChild(li);
        // 给li添加自定义属性  将索引号的值赋值给当前属性
        li.setAttribute("index", i);
        // 动态生成li的同时，给li绑定点击事件
        li.addEventListener("click", function () {
            for (var i = 0; i < ol.children.length; i++) {
                // 先清除所有li的样式
                ol.children[i].className = "";
            }
            // 然后给当前的li添加样式
            this.className = "curent";
            // 点击小圆圈移动的是Ul  移动的核心原理就是用li的索引号*盒子的宽度  因为往左走所以是负值
            // 获取当前点击的属性
            var index = this.getAttribute("index");
            // 当我们点击了某个li,就把当前li的索引号给num;
            num = index;
            // 当我们点击了某个li,就把当前li的索引号给circle;
            circle = index;
            animates.animate(ul, -index * bannerWidth);
        })
    }
    // 给第一个Li添加样式
    ol.children[0].className = "curent";
    // 克隆ul中的第一个li;
    var first = ul.children[0].cloneNode(true);
    // 将克隆的li追加到ul中;
    ul.appendChild(first);
    // 右击绑定点击事件  核心原理复制第一张图片放在最后  当图片移动到最后一张图片时，不做动画跳到最左侧left:0;
    // 设置一个控制右按钮变量
    var num = 0;
    // 设置一个控制小圆圈的变量
    var circle = 0;
    // 设置节流阀
    var flag = true
    // 右侧按钮
    arrow_r.addEventListener("click", function () {
        // 判断是不是最后一张图片
        if (flag) {
            flag = false;//关闭节流阀
            if (num == ul.children.length - 1) {
                // left赋值为0;
                ul.style.left = 0;
                // 变量重新赋值
                num = 0;
            }
            num++;
            animates.animate(ul, -num * bannerWidth, function () {
                flag = true;//打开节流阀
            });
            // 自增
            circle++;
            // 判断circle走到了小圆圈的长度，说明走到了克隆的图片，需要复原
            if (circle == ol.children.length) {
                circle = 0;
            };
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = "";
            }
            ol.children[circle].className = "curent";
        }
    });
    // 左侧按钮
    arrow_l.addEventListener("click", function () {
        // 判断是不是第一张图片
        if (flag) {
            flag = false;//关闭节流阀
            if (num == 0) {
                // 当时第一张图片时就快速跳到最后一张图片
                num = ul.children.length - 1;
                ul.style.left = -num * bannerWidth + "px";
            }
            num--
            animates.animate(ul, -num * bannerWidth, function () {
                flag = true;//打开节流阀
            });
            // 自增
            circle--;
            // 判断circle<0,说明已经走到了第一张图片，需要将小圆圈跳转到最后一个
            if (circle < 0) {
                circle = ol.children.length - 1;
            };
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = "";
            }
            ol.children[circle].className = "curent";
        }
    });
    // 自动播放轮播图
    var timer = setInterval(function () {

        arrow_r.click();
    }, 2000);
});
