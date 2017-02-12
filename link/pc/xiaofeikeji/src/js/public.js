$(function (){
	 navChange()
	$(".m-nav").delegate("li","mouseenter",function(){
		$(this).children(".z-nav-a").addClass("z-nav-active");
		$(this).children(".z-subnav-a").addClass("z-nav-active");
		$(this).children("ul").show()
	}).delegate("li","mouseleave",function(){
		if(!this.onoff){
			$(this).children(".z-nav-a").removeClass("z-nav-active");
		}

		$(this).children(".z-subnav-a").removeClass("z-nav-active");
		$(this).children("ul").hide()
	})
	$(".u-input-email").on("input",function(){
		var href;
		if($(this).val()){
			href="mailto:service@xiaofeikeji.com?body="+$(this).val();
			
		}else{
			href="mailto:service@xiaofeikeji.com";
		}
		$(this).siblings("a").attr("href",href);
	})
})
function computeHeight(obj){
	var hei=$(window).height()-$(".g-head").height();
	hei=hei<600?600:hei;
	obj.height(hei);
	$(window).on("resize",function(){
		var hei=$(window).height()-$(".g-head").height();
		hei=hei<600?600:hei;
		obj.height(hei)
	})
}
function navChange(){
	var href=window.location.href;
	
	$.each($(".z-nav-a"), function(i,item) {
		console.log(href)
		if(href.indexOf($(this).attr("href"))!=-1){
			$(this).addClass("z-nav-active");
			$(this).parent("li").get(0).onoff=true;
		}
	});
}
