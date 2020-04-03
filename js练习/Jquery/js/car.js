$(function () {
    // 1.全选 全不选模块
    // 把全选按钮（checkall)的状态给三个小按钮(j-checkbox)
    // 事件使用change
    $(".checkall").change(function () {
        $(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"));
    })
    // 2.当小按钮全部选上  全选按钮也会跟着选 当小按钮有一个没有选上 全选按钮就不会选上
    $(".j-checkbox").change(function () {
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }
    })
    // 3.增减商品数量
    // 增加商品数量
    $(".increment").click(function () {
        var n = $(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n);
        // 点击增加小计的价格也会跟着增加
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        p = p.substr(1);
        var price = (p * n).toFixed(2)
        $(this).parents(".p-num").siblings(".p-count").html("￥" + price);
        getsum();
    })
    // 减少商品数量
    $(".decrement").click(function () {
        var n = $(this).siblings(".itxt").val();
        n--;
        if (n === 0) {
            return false;
        } else {
            $(this).siblings(".itxt").val(n);
            // 点击减少小计的价格也会跟着减少
            var p = $(this).parents(".p-num").siblings(".p-price").html();
            debugger;
            p = p.substr(1);
            var price = (p * n).toFixed(2)
            $(this).parents(".p-num").siblings(".p-count").html("￥" + price);
        }
        getsum();
    })
    // 4.用户手动更改文本框的值 计算 小计模块
    $(".itxt").change(function () {
        var n = ($(this).val());
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        p = p.substr(1);
        var price = (p * n).toFixed(2)
        var p = $(this).parents(".p-num").siblings(".p-count").html("￥" + price);
        getsum();
    })
    // 5.计算总计总额模块
    getsum();
    function getsum() {
        var count = 0;  // 计算总件数
        var money = 0;  // 计算总钱数

        // 计算总件数
        $(".itxt").each(function (i, ele) {
            count += parseInt($(ele).val());
        });

        // 计算总价格
        $(".p-count").each(function (i, ele) {
            money += parseFloat($(ele).text().substr(1));
        });

        $(".amount-sum em").text(count);
        $(".price-sum em").text("￥" + money.toFixed(2));
    }
    // 6.删除商品模块
    // （1）商品后面的删除
    $(".p-delete a").click(function () {
        $(this).parents(".check-cart-item").remove();
        getsum();
    })
    // （2）删除选中商品
    $(".remove-batch").click(function () {
        // 删除小复选框选中的商品
        $(".j-checkbox:checked").parents(".check-cart-item").remove();
        getsum();
    })
    // （3）删除所有商品 清空购物车
    $(".clear-all").click(function () {
        $(".cart-item-list").remove();
        getsum();
    })

});


