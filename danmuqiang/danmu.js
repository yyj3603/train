window.onload = function () {
    var arr = ["神奇宝贝", "IG", "李哥太秀了", "IG牛逼", "厉害了"];
    for (var i = 0; i < arr.length; i++) {
        var yy = this.createDm(arr[i]);
        this.time(yy);
    }
}
var timers = []; //弹幕定时
var isShow = true;
//发送按钮点击事件
$("#send").on("click", function () {
    //创建弹幕
    var dom = createDm($("#input").val());
    //添加定时
    time(dom);
});
//绑定input获取焦点时的键盘事件
$("input").keydown(function (event) {
    if (event.keyCode == 13) {
        //创建弹幕
        var dom = createDm($("#input").val());
        //添加定时
        time(dom);
    }

})

// 监听关闭弹幕按钮
$("#clear").on("click", function () {
    $(".content").empty();
});

function createDm(text) {
    //弹幕的随机位置，颜色和字体大小,随机速度
    var dom = $("<div class='bullet'>" + text + "</div>");

    var fontColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random()) + ")";
    var fontSize = Math.floor((Math.random() + 1) * 24) + "px";
    var left = $(".content").width() + "px";
    var top = Math.floor(Math.random() * 500) + "px";
    top = parseInt(top) > 452 ? "452px" : top;
    dom.css({
        "position": "absolute",
        "color": fontColor,
        "font-size": fontSize,
        "left": left,
        "top": top,
        "white-space": 'nowrap'
    })
    $(".content").append(dom);
    return dom;
}
//定时器
function time(dom) {
    var speed = Math.random() * 3 + 1;
    var left = dom.offset().left - $(".content").offset().left;
    var timer = setInterval(function () {
        left = left - speed;
        dom.css("left", left + "px");
        /*  if(parseFloat(dom.css("right"))>830){
             dom.remove();
             clearInterval(timer);
         } */
        /* if ((dom.offset().left + dom.width()) < $(".content").offset().left) {
            dom.remove()
            clearInterval(timer)
        } */
        if ((dom.offset().left + dom.width()) < $(".content").offset().left) {
            dom.css("left",800);
            time(dom);
            clearInterval(timer);
        }

    }, 5);
    timers.push(timer);
}