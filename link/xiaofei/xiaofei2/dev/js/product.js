$(function(){
	computeHeight($(".m-img-container"));
	renderPage()
	window.onhashchange=function(){
		renderPage()
		location.reload();
	}
	$(".m-pro-head").delegate("a","click",function(){
		var flag=$(this).attr("flag");
		$(".m-pro-wrap").hide();
		$(this).addClass("zactive").siblings().removeClass("zactive");
		$.each($(".m-pro-wrap"),function(i,item){
			if($(this).attr("role")==flag){
				$(this).show();
			}
		})
	})
//	var mypile=new Vue({
//		el: '#mypile',
//		data: {
//			pro:"pile",
//			active:true,
////			disactive:false
//		},
//		methods:{
//			changePro:function(ev){
////				console.log(ev,ev.target);
//				this.pro=$(ev.target).attr("flag");
//				if(this.pro=="pile"){
//					this.active=true;
//				}else{
//					this.active=false;
//				}
////				$(ev.target).
////				$(ev.target).addClass("z-a-active").siblings("a").removeClass("z-a-active")
//			},
//			reSwiper:function(){
//				var swiper = new Swiper('.swiper-container',{
//					 slidesPerView : 3,
//			//		 spaceBetween : 20,
//					 prevButton:'.swiper-button-prev',
//					nextButton:'.swiper-button-next',
//					loop : true,
//					slidesPerView : 3,
//					slidesPerGroup : 3
//				});
//			}
//		}
//	})
	var swiper = new Swiper('.swiper-container',{
		 slidesPerView : 3,
//		 spaceBetween : 20,
		 prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
		loop : true,
		slidesPerView : 3,
		slidesPerGroup : 3,
		lazyLoading : true,
		watchSlidesVisibility:true
	});
	$(".swiper-wrapper").delegate(".u-btn-down","click",function(){
		var link=window.location.host;
		console.log(link);
//		var url=link+"/html/"+$(this).siblings("img").attr("src");
		link+=$(this).siblings("img").attr("src").substring(2) ;
//		console.log(link)
		window.open("http://xiaofeikuaichong.com.cn/XiaoFei/downLoadImageSecurity?path="+link);
	})
})
function renderPage(){
	var hash=window.location.hash;
	console.log(hash);
	$(".m-img").hide()
	if(hash.indexOf("om")!=-1){//运维页
		$(".m-img3").show()
	}else if(hash.indexOf("pile")!=-1){//充电桩页
		$(".m-img2").show()
	}else{//汽车展示 默认页
		$(".m-img1").show()
	}
	$.each($(".m-pro-container"), function() {
		console.log(this)
		if(hash.indexOf($(this).attr("role"))!=-1){
			$(this).addClass("z-block-active")
		}else{
			$(this).removeClass("z-block-active");
		}
		
	});

}
