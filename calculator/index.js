$(document).ready(function () {
    let calculator = {
        text: '',   // 用于展示到计算机输入框的内容

        result: 0,  // 结果
        fuhao: ['+', '-', '*', '/'],
        // MAP: {
        //     '+': '+',
        //     '-': '-',
        //     '*': 'x',
        //     '/': '÷',
        // },

        // 展示当前点击的内容
        showText: function (e) {
            let _text = $(e).text();
            let _result = $('.result').text();
            let _txt = $(".operator").text();
            if (_result.substr(_result.length - 1, 1) === _txt) {
                return;
            }
            // let _value = this.MAP[_text] || _text;

            $('.result').append(_text);
        },

        showResult: function () {
            $('.result').empty();
            $('.result').text(this.result);
        },

        // 加
        add: function (val) {
            return this.result += val;
        },

        // 减
        subtract: function () {

        },

        // 乘
        multiply: function () {

        },

        // 除
        divide: function () {

        },
    }

    $('.row button').on('click', function () {
        let me = $(this);
        calculator.showText(me);
        // let _thisValue = calculator.getValue(me);   // 获得当前点击的按钮文本

    })

    // 计算结果
    $('.count').on('click', function () {
        let _resultText = $('.result').text();
        $('.result').empty();
        $('.result').append(eval(_resultText));
    })

    // 清除
    $('.empty').on('click', function () {
        $('.result').empty();
    })


    // $(".rowNumber").click(function () {
    //     var text = $(this).text()
    //     $(".result").append(text)
    // })
})
// $(document).ready(function () {
//     $(".operator").click(function () {
//         var txt = $(this).text()
//         $(".result").append(txt)
//     })
// })
// $(document).ready(function () {
//     $(".rowNumber").click(function () {
//         var text = $(this).text()
//         $(".count").click(function () {
//             var num1 = Number(text);
//             var count = num1
//             $(".result").text(count)
//         })
//     })
// })
// $(document).ready(function () {
//     $(".empty").click(function () {
//         $(".result").empty();
//     });
// });