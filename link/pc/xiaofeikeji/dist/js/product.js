function renderPage(){var i=window.location.hash;console.log(i),$(".m-img").hide(),i.indexOf("om")!=-1?$(".m-img3").show():i.indexOf("pile")!=-1?$(".m-img2").show():$(".m-img1").show(),$.each($(".m-pro-container"),function(){console.log(this),i.indexOf($(this).attr("role"))!=-1?$(this).addClass("z-block-active"):$(this).removeClass("z-block-active")})}$(function(){computeHeight($(".m-img-container")),renderPage(),window.onhashchange=function(){renderPage(),location.reload()},$(".m-pro-head").delegate("a","click",function(){var i=$(this).attr("flag");$(".m-pro-wrap").hide(),$(this).addClass("zactive").siblings().removeClass("zactive"),$.each($(".m-pro-wrap"),function(e,o){$(this).attr("role")==i&&$(this).show()})});new Swiper(".swiper-container",{slidesPerView:3,prevButton:".swiper-button-prev",nextButton:".swiper-button-next",loop:!0,slidesPerView:3,slidesPerGroup:3,lazyLoading:!0,watchSlidesVisibility:!0});$(".swiper-wrapper").delegate(".u-btn-down","click",function(){var i=window.location.host;console.log(i),i+=$(this).siblings("img").attr("src").substring(2),window.open("http://xiaofeikuaichong.com.cn/XiaoFei/downLoadImageSecurity?path="+i)})});