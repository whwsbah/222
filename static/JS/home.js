$(function(){
    AOS.init({
        offset:200,
        delay:100,
        duration:1000,
    });  
    
    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop()
        let innerHeight = $(window).innerHeight()

        // part1
        let x1 = scrollTop-($(".box").eq(0).offset().top-innerHeight)
        let r1 = x1/innerHeight
        if (x1>0){
            if(r1>0 && r1<0.2){
                $(".part").eq(0).css({
                    "opacity":0,
                })     
            }
            if(r1>0.2 && r1<0.5){
                $(".part").eq(0).css({
                    "opacity":r1,
                })     
            }
            if(r1>0.5 && r1<1){
                $(".part").eq(0).css({
                    "opacity":1,
                })     
            }
            if(r1>1 && r1<1.2){
                $(".part").eq(0).css({
                    "opacity":1,
                    "transform":"translateY("+ (x1-innerHeight) +"px)"
                })     
            }
            if(r1>1.2 && r1<4){
                $(".part").eq(0).css({
                    "opacity":1,
                    "transform":"translateY("+ (x1-innerHeight) +"px)"
                })     
            }
        }

        // part2
        let x2 = scrollTop-($(".box").eq(1).offset().top-innerHeight)
        let r2 = x2/innerHeight
        if (x2>0){
            if(r2>0 && r2<0.2){
                $(".part").eq(1).css({
                    "opacity":0,
                })     
            }
            if(r2>0.2 && r2<0.5){
                $(".part").eq(1).css({
                    "opacity":(r2-0.2)/0.3,
                    "transform":"translateY("+ (x2-innerHeight) +"px)"
                })     
            }
            if(r2>0.5 && r2<1){
                $(".part").eq(1).css({
                    "opacity":1,
                    "transform":"translateY("+ (x2-innerHeight) +"px)"
                })     
            }
            if(r2>1 && r2<1.2){
                $(".part").eq(1).css({
                    "opacity":1,
                    "transform":"translateY("+ (x2-innerHeight) +"px)"
                })     
            }
            if(r2>1.2 && r2<3){
                $(".part").eq(1).css({
                    "opacity":1,
                    "transform":"translateY("+ (x2-innerHeight) +"px)"
                })     
            }

        }

        // part3
        let x3 = scrollTop-($(".box").eq(2).offset().top-innerHeight)
        let r3 = x3/innerHeight
        if (x3>0){
            if(r3>0 && r3<0.2){
                $(".part").eq(2).css({
                    "opacity":0,
                })     
            }
            if(r3>0.2 && r3<1.2){
                $(".part").eq(2).css({
                    "opacity":1,
                    "transform":"translateY("+ (x3-innerHeight) +"px)"
                })     
            }
            if(r3>1.2 && r3<1.5){
                $(".part").eq(2).css({
                    "opacity":(1.5-r3)/0.3,
                    "transform":"translateY("+ (x3-innerHeight) +"px)"
                })     
            }
            
            if(r3>1.5 && r3<2){
                $(".part").eq(2).css({
                    "opacity":0,
                    "transform":"translateY("+ (x3-innerHeight) +"px)"
                })     
            }
            if(r3>=0.2){
                $(".part").eq(2).animate({
                    left:'35vw',
                    top:'-50vh'
                })
            }

        }
    
        // part4
        let x4 = scrollTop-($(".box").eq(3).offset().top-innerHeight)
        let r4 = x4/innerHeight
        if (x4>0){
            if(r4>0 && r4<0.2){
                $(".part").eq(3).css({
                    "opacity":0,
                })     
            }
            if(r4>0.2 && r4<0.5){
                $(".part").eq(3).css({
                    "opacity":(r4-0.2)/0.3,
                    "transform":"translateY("+ (x4-innerHeight) +"px)"
                })     
            }
            if(r4>0.5 && r4<1){
                $(".part").eq(3).css({
                    "opacity":1,
                    "transform":"translateY("+ (x4-innerHeight) +"px)"
                })     
            }
            if(r4>1){
                $(".part").eq(3).css({
                    "opacity":1,
                })     
            }
        } 
    })
    
})
