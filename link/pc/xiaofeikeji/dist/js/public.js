function computeHeight(i){var e=$(window).height()-$(".g-head").height();e=e<600?600:e,i.height(e),$(window).on("resize",function(){var e=$(window).height()-$(".g-head").height();e=e<600?600:e,i.height(e)})}function navChange(){var i=window.location.href;$.each($(".z-nav-a"),function(e,a){console.log(i),i.indexOf($(this).attr("href"))!=-1&&($(this).addClass("z-nav-active"),$(this).parent("li").get(0).onoff=!0)})}$(function(){navChange(),$(".m-nav").delegate("li","mouseenter",function(){$(this).children(".z-nav-a").addClass("z-nav-active"),$(this).children(".z-subnav-a").addClass("z-nav-active"),$(this).children("ul").show()}).delegate("li","mouseleave",function(){this.onoff||$(this).children(".z-nav-a").removeClass("z-nav-active"),$(this).children(".z-subnav-a").removeClass("z-nav-active"),$(this).children("ul").hide()}),$(".u-input-email").on("input",function(){var i;i=$(this).val()?"mailto:service@xiaofeikeji.com?body="+$(this).val():"mailto:service@xiaofeikeji.com",$(this).siblings("a").attr("href",i)})});