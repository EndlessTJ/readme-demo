/*用于首页的js*/
$(function () {
    /*响应式的下拉查单样式*/
    var cHeight=$(window).height();
    var  cWidth=$(window).width();
    $("#small-menu").css("height",cHeight+"px");
    $(window).resize(function () {
         cHeight=$(window).height();
            cWidth=$(window).width();
        if (cWidth>768){
            $("#small-menu").css({
                "right":"-300px"
            })
        }
    });
   $(".top-nav .menu-btn").click(function () {
       $(this).toggleClass("cross-btn");
       var attr=$("#small-menu").css("right");
       if (attr=="-300px"){
           $("#small-menu").css({
               "right":0
           });
           $("#small-menu li").css({
               "opacity":1,
               "transform":"translateX(0)"
           })
       }else {
           $("#small-menu").css({
               "right":"-300px"
           });
           $("#small-menu li").css({
               "opacity":0,
               "transform":"translateX(100%)"
           })
       }

       
   })
});