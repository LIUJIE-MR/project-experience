/**
 * Created by Administrator on 2018/10/25.
 */
$(document).ready(function(){
    //当鼠标覆盖在导航条上时候加上下边框
    $(".nav_title ul li").mouseover(function(){
        $(this).addClass("hover");
        $(this).siblings().removeClass("hover");
    });
    $(window).scroll(function(){//开始监听滚动条
    //获取当前滚动条高度
        var topp = $(document).scrollTop();
    //用于调试 弹出当前滚动条高度
    //判断如果滚动条大于90则弹出 "ok"
    //    console.log(topp);
        if(topp>1200){
            $(".id_h4").stop().addClass("h4_Active");
        }else {
            $(".id_h4").stop().removeClass("h4_Active");
        }
        if(topp>1900){
            $(".id_h5").stop().addClass("h5_Active");
        }else {
            $(".id_h5").stop().removeClass("h5_Active");
        }
        if(topp>3200){
            $(".id_h6").stop().addClass("h6_Active");
        }else {
            $(".id_h6").stop().removeClass("h6_Active");
        }
        if(topp>3500){
            $(".id_h7").stop().addClass("h7_Active");
        }else{
            $(".id_h7").stop().removeClass("h7_Active");
        }
        if(topp>4200){
            $(".id_h8").stop().addClass("h8_Active");
        }else{
            $(".id_h8").stop().removeClass("h8_Active");
        }
    });
	$(".swiper-my-wrapper .button-next").click(function(){
		$(".swiper-my-wrapper .prev").hide(500);
		$(".swiper-my-wrapper .next").show(500);
	});
	$(".swiper-my-wrapper .button-prev").click(function(){
		$(".swiper-my-wrapper .next").hide(500);
		$(".swiper-my-wrapper .prev").show(500);
	});
	$(".id_h4z").mouseenter(function(){
		$(this).css({
			"background":"#fff",
			"color":"#0f3979"
		});
		$(this).find("img").stop().fadeIn(2000);
		$(this).find("b").stop().css("padding-top","0px");
	});
	$(".id_h4z").mouseleave(function(){
		$(this).css({
			"background":"url('./images/zzc.png') no-repeat",
			"background-size":"cover",
			"color":"#ffffff"
		});
		$(this).find("img").stop().css("display","none");
		$(this).find("b").stop().css("padding-top","67px");
	});
});