// function displayabrrebiations() {
//     //取得所有缩略词
//     let abbreviations = document.getElementsByTagName("abbr");
//     if (abbreviations.length < 1) return false;
//     let defs = new Array();
//     // 同: let defs = [];

//     //遍历这些缩略词
//     for (let i = 0; i < abbreviations.length; i++) {
//         let current_abbr = abbreviations[i];
//         let title = current_abbr.getAttribute("title");
//         let key = current_abbr.lastChild.nodeValue;
//         defs[key] = title;
//     }

//     //创建自定义列表
//     let dlist = document.createElement("dl");
//     //遍历定义
//     for (key in defs) {
//         let title = defs[key];
//         //创建自定义标题
//         let dtitle = document.createElement("dt");
//         let dtitle_text = document.createTextNode(key);
//         dtitle.appendChild(dtitle_text);
//         //创建自定义内容
//         let ddesc = document.createElement("dd");
//         let ddesc_text = document.createTextNode(title);
//         ddesc.appendChild(ddesc_text);
//         //添加到自定义列表
//         dlist.appendChild(ddesc);
//         dlist.appendChild(dtitle);
//     }
//     //创建标题
//     let header = document.createElement("h2");
//     let header_text = document.createTextNode("Abbreviations");
//     header.appendChild(header_text);

//     //把自定义列表添加到页面主体
//     document.body.appendChild(header);
//     //把标题添加到页面主体
//     document.body.appendChild(dlist);
// }

$(document).ready(function () {

})

// 简写
$(function () {

})

$(function () {
    // 1. 遍历页面所有的 abbr 标签
    // 2. 取得每个 abbr 标签中的 文字 和 title
    // 3. 拼装成 dl dt dd 结构的元素
    $('body').append('<h2>Abbreviations</h2>');
    $('body').append("<dl id='abbrsContainer'></dl>");

    // jQuery 的 each
    $("abbr").each(function () {
        let text = $(this).text();
        let title = $(this).attr('title');
        $("#abbrsContainer").append("<dt>" + text + "</dt><dd>" + title + "</dd>");
    });

    // 原生的 for 循环
    // let abbrs = $('abbr');
    // for (let i = 0; i < abbrs.length; i++) {
    //     const $abbr = $(abbrs[i]);
    //     let text = $abbr.text();
    //     let title = $abbr.attr('title');
    //     $("#abbrsContainer").append("<dt>" + text + "</dt><dd>" + title + "</dd>");
    // }
})
$("blockquote").append("<a id='link'>source</a>");
$(function () {
    let cite = $("blockquote").attr("cite");
    $('#link').attr("href", cite);
});





// function addloadEvent(func) {
//         let oldonload = window.onload;  // 将现有的事件处理函数的值存入变量中
//         if (typeof window.onload != "function") {
//             window.onload = func;       // 如果这个事件处理函数没有绑定任何函数，就把新函数添加给它
//         } else {
//             window.onload = function () {
//                 oldonload();
//                 func();// 如果已经绑定了函数，就把新函数追加到现有指令的末尾
//             }
//         }
//     }
// // addloadEvent(displayabrrebiations);
// // addloadEvent(createList)
