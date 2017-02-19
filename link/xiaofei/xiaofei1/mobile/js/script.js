$(function(){
	var nownum=0;
	var initnum=null;
		$(".info .info1").css("opacity",0);
		$(".info .info2").css("opacity",0);
		$(".info .info3").css("opacity",0)
		$("info info1").css("opacity",0)
		pagePro()
		function pagePro(){
			var hash=window.location.hash;
			console.log(hash)
			if(hash){
				initnum=hash.substring(5);
				nownum=initnum%9;
				console.log(initnum)
//				var clas= "bg bg"+(1+Number(nownum));
//				$(".bg").attr("class",clas).fadeIn(200);
//					setTimeout(function(){
////						console.log(1,nownum)
//			      		$(".info").eq(1+Number(nownum)).find(".info1").animate({opacity:1},800);
//			      	},200);
//			        
//			      	setTimeout(function(){
////			      		console.log(2)
//			      		$(".info").eq(1+Number(nownum)).find(".info2").animate({opacity:1},800);
//			      	},600);
//			      	setTimeout(function(){
////			      		console.log(3)
//			      		$(".info").eq(1+Number(nownum)).find(".info3").animate({opacity:1},800);
//			      	},1400);
			}else{
//				console.log(2222,$(".info").eq(1).html(),$(".info").eq(1).find(".info2").length,"mark")
//				setTimeout(function(){
//		      		$(".info").eq(1).find(".info1").animate({opacity:1},800);
//		      	},200);
//	//	        
//		      	setTimeout(function(){
//		      		$(".info").eq(1).find(".info2").animate({opacity:1},800);
//		      	},600);
//		      	setTimeout(function(){
//		      		$(".info").eq(1).find(".info3").animate({opacity:1},800);
//		      	},1400);
			}
			initSwiper();
		}
	function initSwiper(){
		var initNum=parseInt(initnum)||0;
//		console.log(initNum,"swiper")
		
		 var mySwiper = new Swiper('.swiper-container',{
	        paginationClickable: true,//f点击分页器指示灯可切换
	        slidesPerView: 1,//容器可容纳滑块个数
	        mode: 'vertical',//竖直
	        initialSlide :initNum,
//			initialSlide :5,
	        preventLinksPropagation :true,
	        direction : 'vertical',
	        loop : true,
	        touchMoveStopPropagation : false,
	        onSlideChangeEnd:function(swiper){
//	        	console.log(swiper.nitSwiper())
	        	$(".info .info1").css("opacity",0);
				$(".info .info2").css("opacity",0);
				$(".info .info3").css("opacity",0);
	//    	var info = $(mySwiper.activeSlide()).find('.info');
			var info=$(".swiper-slide-active");
	
	        	var info1 = info.find('.info1');
	        	var info2 = info.find('.info2');
	        	var info3 = info.find('.info3');
	//      	$(".info1,.info2,.info3,.info4,.info5").css('opacity','0');
	//     	var index=$(mySwiper.activeSlide()).index();
	       	var index=swiper.activeIndex;
			console.log("end"+index)
	       	
			var clas1,clas2;
			var index=index-1;
			console.log(nownum,index)
			
			if(nownum<index){//下滑
	//			alert("下滑")
				index=index<9?index:0;
			}else{//上滑
	//			alert("上滑")
				index=index>0?index:8;
			}
			clas1="bg bg"+(index+1);
			nownum=index;
			$(".bg").eq(0).stop().fadeOut(800,function(){
				$(this).attr("class",clas1).css("opacity",1).show();
				$(".bg").eq(1).hide()
			})
			$(".bg").eq(1).stop().attr("class",clas1).fadeIn(800,function(){
	//			$(this).hide();
			});
			window.location.hash="#page"+index;
			$(".info .info1").css("opacity",0);
			$(".info .info2").css("opacity",0);
			$(".info .info3").css("opacity",0);
	      	setTimeout(function(){
	      		console.log(index)
	      		info1.animate({opacity:1},800);
	      	},200);
	        
	      	setTimeout(function(){
	      		info2.animate({opacity:1},800);
	      	},600);
	      	setTimeout(function(){
	      		info3.animate({opacity:1},800);
	      	},1400);
	      	
	       },
	       onTouchEnd: function(swiper){
	       	    $(".info .info1").css("opacity",0);
				$(".info .info2").css("opacity",0);
				$(".info .info3").css("opacity",0)
	////			var pre=swiper.previousIndex;
	////			console.log(pre)
	////			var prenode=$(".swiper-slide").eq(pre);
	////			prenode.find(".info1").css("opacity",1);
	////			prenode.find(".info2").css("opacity",1);
	////			prenode.find(".info3").css("opacity",1);
	//	var index=swiper.activeIndex;
	       	var info=$(".swiper-slide-active");
	        	var info1 = info.find('.info1');
	        	var info2 = info.find('.info2');
	        	var info3 = info.find('.info3');
	//      	console.log("touchend"+index)
	//     	setTimeout(function(){
	      		info1.css("opacity",1);
	      		info2.css("opacity",1)
	      		info3.css("opacity",1)
	//    	},2200)
	   		 }
	    });
	}
   

   
})