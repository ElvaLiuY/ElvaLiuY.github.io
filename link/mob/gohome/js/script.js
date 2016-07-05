$(function(){
    var mySwiper = new Swiper('.swiper-container',{
        paginationClickable: true,//f点击分页器指示灯可切换
        slidesPerView: 1,//容器可容纳滑块个数
        mode: 'vertical',//竖直
        onTouchEnd:function(){
      	var info = $(mySwiper.activeSlide()).find('.info');
        	var info1 = info.find('.info1');
        	var info2 = info.find('.info2');
        	var info3 = info.find('.info3');
        	var info4 = info.find('.info4');
        	var info5 = info.find('.info5');
        	$(".info1,.info2,.info3,.info4,.info5").css('opacity','0');
       	
      	setTimeout(function(){
      		info1.animate({opacity:1},800);
      	},200);
        
      	setTimeout(function(){
      		info2.animate({opacity:1},800);
      	},800);
      	setTimeout(function(){
      		info3.animate({opacity:1},800);
      	},1400);
      	setTimeout(function(){
     		info4.animate({opacity:1},800);
      	},2000);
     	setTimeout(function(){
      		info5.animate({opacity:1},800);
      	},2600);
        }
    });
    /*********处理音乐播放开启和暂停****************/
    $('.music').on('touchstart',function(){
        if($(this).hasClass('on')){
            $('audio').get(0).pause();
            $(this).removeClass('on music-off');
            $(this).attr('src','images/off.png');
        }else {
            $('audio').get(0).play();
            $(this).addClass('on music-off');
            $(this).attr('src','images/on.png');
        }  
    });
  

   
})