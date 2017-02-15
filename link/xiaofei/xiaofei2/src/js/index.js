$(function () {
	/*首页banner
	 * 1.默认播放 index=1
	 * 2.从左到右 自动播放 时间间隔
	 * 3.隔离器可点击   自定义样式
	 * 4.预加载图片
	 * */
	 var swiper = new Swiper('.swiper-container',{
	 	pagination : '.swiper-pagination',
	 	initialSlide :1,
	 	loop : true,
		paginationClickable :true,
		paginationType : 'custom',
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
 		paginationCustomRender: function (swiper, current, total) {
// 			console.log(current)
 			var str="";
 			var classname="";
 			for(var i=1; i<=total;i++){
 				if(i==current){
 					classname="u-progressbar z-activebar";
 				}else{
 					classname="u-progressbar";
 				}
 				str+='<span class="' + classname + '"></span>'
 			}
		    return str;
 		 },
 		 onSlideChangeEnd: function(swiper){
//	      console.log(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide
	      var index=swiper.activeIndex;
	      index=index==4?1:index;
	      console.log(index)
	      changeImg(index)
	    }
		});
 	swipTo();
 //分离器点击切换banner
	function swipTo(){
		$(".swiper-pagination").delegate("span","click",function(){
			console.log($(this).index())
			swiper.slideTo($(this).index()+1)
		})
	}
	var bannerpos={};
	bannerpos={
		top:$(".m-banner").offset().top,
		left:$(".m-banner").offset().left,
		right:$(".m-banner").offset().left+$(".m-banner").width(),
		bottom:$(".m-banner").offset().top+$(".m-banner").height()
	}
	bannerpos.top=$(".m-banner").offset().top;
	bannerpos.left=$(".m-banner").offset().left;
	console.log(bannerpos)
	/*****上一页    下一页效果处理*****/
	$(".m-banner").on("mousemove",function(ev){
//		console.log(ev.clientX,ev.clientY)
		if(ev.clientX<bannerpos.left+270){
//			$(".f-btn-next").animate({width:270},500,ease)
			$(".f-btn-pre").removeClass("z-btn-disactive").css("left",0)
//			.stop().animate({left:0},200)
		}else{
//			$(".f-btn-pre").stop().animate({left:-260},200,function(){
				$(".f-btn-pre").addClass("z-btn-disactive").css("left",-262)
//			})
		}
		if(ev.clientX>bannerpos.right-270){
			$(".f-btn-next").removeClass("z-btn-disactive").css("right",0)
//			.stop().animate({right:0},200)
		}else{
//			$(".f-btn-next").stop().animate({right:-260},200,function(){
				$(".f-btn-next").addClass("z-btn-disactive").css("right",-262)
//			})
		}
	})

$(".u-btn-more").on("click",function(){
	window.location.href="introduction.html";
})

})
computeHeight($(".m-banner"));


function changeImg(num){
	var dataimg=D.bimgurl;
	var pre=null
	var next=null;
	next=num;
	pre=num-2;
	if(pre<0){
		pre=3+pre;
	}
	next=next>2?0:next;
	console.log(num,pre)
	$(".f-btn-pre img").attr("src",dataimg[pre]);
	$(".f-btn-next img").attr("src",dataimg[next]);
	
}
//	function swipTo(){
////		console.log(i)
//		console.log($(this))
////		swiper.slideTo(i)
//	}
