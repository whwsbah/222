$(function(){
    var flag = true;
    $(".left_nav p").click(function(){
        flag = false;
        var index = $(this).index();
        var current = $(".section").eq(index).offset().top
        $("html").stop().animate({
            scrollTop:current
        },function(){
            flag = true;
        })
        $(this).addClass("current").siblings().removeClass();
    })
    $(window).scroll(function(){
        if(flag){
            $(".section").each(function(i,s){
                if($(document).scrollTop() >= $(s).offset().top){
                    $(".left_nav p").eq(i).addClass("current").siblings().removeClass();
                }
            })
        }
    })
})