/*原生的效果：鼠标移入ADpic导航扇形出现,考虑到还有很多作品链接，就不做过多的展示效果啦2016.6.24*/
/*var glist=document.getElementById("glist");
var gcont=glist.getElementsByTagName("span");
var gpic1=document.getElementById("gpic1");
gpic1.addEventListener("mouseover",function(){
	for(var i=0;i<gcont.length;i++){
		gcont[i].style.opacity="1";
		gcont[i].style.transform="scale(1)"
		gcont[i].style.top=i*125+"px";
		if(i<gcont.length/2){
			gcont[i].style.left=300+i*50+"px";
		}else{
			gcont[i].style.left=300+(gcont.length-1-i)*50+"px";
		}
	}
//	$("#clkenter").fadeOut(1000)
},false)*/

/*gpic1.onmouseover=function(){
	for(var i=0;i<gcont.length;i++){
		gcont[i].style.opacity="1";
		gcont[i].style.transform="scale(1)"
		gcont[i].style.top=i*125+"px";
		if(i<gcont.length/2){
			gcont[i].style.left=300+i*50+"px";
		}else{
			gcont[i].style.left=300+(gcont.length-1-i)*50+"px";
		}
	}
}*/
/*鼠标移除：导航收回*/
/*gpic1.addEventListener("mouseout",function(){
	setTimeout(function(){
		$("#glist span").css("top","250px").css("left",0).css("opacity",0).css("transform","scale(0)")	
//		$("#clkenter").fadeIn(2000)
	},2000)
},false)*/
/*gpic1.onmouseout=function(){
	setTimeout(function(){
//		for(var i=0;i<gcont.length;i++){
//		gcont[i].style.top=250+"px";
//		gcont[i].style.left=0;
//		gcont[i].style.opacity=0;
		$("#glist span").css("top","250px").css("left",0).css("opacity",0).css("transform","scale(0)")
		
	},2000)
}*/
/******以上原本为添加导航页面，后暂不考虑***********/

/****点击切换当前显示*******/
var home=document.getElementById("home");
$("#fixbox span").on("click",function(){
	changePage($(this));
//	var $dis=$("#home").children().eq($(this).index()).offset().top;
	var index=$(this).index();
	console.log(index);
	var dis=home.children[index].getBoundingClientRect().top;
	var nowtop=$("body").offset().top;
	$("body").animate({top:nowtop-dis},500);
	if(index==1){
		skilbarShow()
	}else{
		$(".skil_bar").stop().css("width",0);
	}
	console.log(dis);
})
function changePage(a){
	$("#fixbox span[class*=active]").removeClass("active")
	a.addClass("active");
}
/****改变 fixedpoint**********/
function cFixball(){
	var $child=$("#home").children();
	var mintop=document.getElementById("home").getBoundingClientRect().top;
	var index=0;
	$.each($child, function() {
		var gettop=this.getBoundingClientRect().top;
		if(Math.abs(mintop)>Math.abs(gettop)){
			mintop=gettop;
			index=$(this).index();
		}
	});
//	console.log($(".skil_bar").width());
	if(index==1){
		skilbarShow()
	}else{
		$(".skil_bar").stop().css("width",0);
	}
	changePage($("#fixbox span").eq(index))
}
/*********自定义鼠标滚动事件************/
/****
 * 1.滚动条自身高度设置
 * 2.确定滚动速度 100px/pre
 * 3.处理滚动事件
 * ---页面滚动
 * ---滚动条滚动
 * ---fixed point样式切换
 * ***********/
	var $h=$("body").height();
	var $windH=$(window).height();
	var $scrbar=$("#scrollbox .scr_bar");
	(function setScrbar(){
		$scrbar.height($windH/$h*$("#scrollbox").height());
	})()
	var onoff=null;
	document.onmousewheel=prowheel;
	document.addEventListener("DOMMouseScroll",prowheel)
	function prowheel(ev)
	{
		var ev=ev||event;
		var onoff=null;
		if(ev.wheelDelta)//google上翻为正 下翻为负
		{
			ev.wheelDelta<0?onoff=true:onoff=false;
//			console.log(ev.wheelDelta)
		}
		if(ev.detail)
		{
//			console.log(ev.detail);
			ev.detail<0?onoff=false:onoff=true;
		}
		scrPro(onoff);
	}
	function scrPro(onoff){
		if(onoff){//向上走
			if($("body").offset().top>=($windH-$h)){
				scroPos($("body").offset().top-100,true);
			}else{
				scroPos($windH-$h,true)
//				alert("已经到底啦~")
			}
		}else{
			if($("body").offset().top<0){
				scroPos($("body").offset().top+100,true);
			}else{
				scroPos(0,true)
//				alert("已经到顶啦~")
			}
		}
	}
	function scroPos(y,bl){//文档显示位置和滚动条联动
		if(bl){
			$("body").css("top",y+"px");
			var $scrTop=-y*($windH-$scrbar.height())/($h-$windH);
			$("#scrollbox .scr_bar").css("top",$scrTop+"px");
		}else{
			$scrbar.css("top",y);
			$("body").css("top",-y*($h-$windH)/($windH-$scrbar.height())+"px");
		}
			cFixball()
	}
/*****滚动条拖动事件******/
$scrbar.on("mousedown",scrdown)
	function scrdown(ev){
		var $disy=ev.pageY-$scrbar.offset().top;
		$(document).on("mousemove",scrmove).on("mouseup",scrup)
		return false;
		function scrmove(ev){
		var top=null?ev.pageY-$disy:0;
		if(ev.pageY-$disy>0){
			if(ev.pageY-$disy>$("#scrollbox").height()-$scrbar.height()){
				top=$("#scrollbox").height()-$scrbar.height()
			}else{
				top=ev.pageY-$disy;
			}
		}else{
			top=0;
		}
		scroPos(top,false)
	}
	function scrup(){
		$(document).off("mousemove",scrmove).off("mouseup",scrup)
	}
}
	
(function changeImg(){
	setInterval(function(){
		$("#hpic img:hidden").fadeIn(1500).siblings().fadeOut(1500);
		
	},5000)
})()
/*****技能条效果*****/
function skilbarShow(){
	$.each($(".skil_bar"), function(i,item) {
		var wid=$(this).attr("_value")*200;
		$(this).animate({width:wid},1000);
	});
}
//skilbarShow()
/******技能展示切换效果*******/
$(".re_cont").on("mouseenter",skilshow).on("mouseleave",skilshow)
function skilshow(){
//	console.log($(".skil_box").children(":hidden").length)
	$(".skil_box").children(":visible").hide().siblings().fadeIn(800)
}
$("#resume .more").eq(0).on("click",function(){
//	alert(1)
	window.open("link/resume.html","_blank");
})
console.log($(".show_det_box").length);
$.each($(".show_det_box"), function(i,item) {
	$(this).on("click",function(){
		console.log(i);
		probox(info[i]);
	})
});
/******作品弹窗*********/
function probox(data){
	console.log(data);
	var $probox=$("<div id='probox'><input type='button' value='close' id='closebtn'/></div>");
	var $procont=$("<div id='procont'></div>");
	var str="";
	$.each(data,function(i,item){
		str+='<dl>'+
				'<dt>'+item.name+'</dt>'+
				'<dd>'+
					'<h6>作品简介：</h6>'+
					'<p>'+item.des+'</p>'+
				'</dd>'+createdet(item.detail)+
				'<dd>'+
					'<h6>作品链接：<a href="'+item.plink+'" target="_blank">'+item.plink+'</a></h6>'+
				'</dd>'+
			'</dl>';
	})
	str+='<p>PS：作品仅供展示，程序只是简单实现了一些功能，并未做深度的完善处理，BUG比较多，尤其是游戏部分是前段时间写的，问题更多些，后续会考虑完善，欢迎吐槽！</p>';
	$probox.append($procont.html(str)).appendTo($("body"))
	function createdet(data){
		var str="";
		if(!data){
			return str;
		}
		$.each(data,function(i,item){
			str+='<p>'+(i+1)+"."+item+'</p>';
		})
		return '<dd>'+'<h6>技术描述：</h6>'+str+'</dd>';
	}
	$("#closebtn").on("click",function(){
		$probox.remove();
	})
}
/********设置联系图标效果*******/
$(".cont_icn span").on("mouseover",function(){
//	$(this).css("border","2px solid black")
//	$(this).css("transform","rotateY(20deg)")
	$(".con_cont p span").eq($(this).index()).addClass('con_icn_ative').siblings().removeClass("con_icn_ative");
})
$(".cont_icn").on("mousemove",con_ic_animate)
$(".cont_icn").on("mouseout",con_ic_an2)
function con_ic_animate(ev){
	$(".cont_icn").eq(0).css("transition","0s");
	var centerx=$(".cont_icn").eq(0).offset().left+$(".cont_icn").eq(0).width()/2;
var centery=$(".cont_icn").eq(0).offset().top+$(".cont_icn").eq(0).height()/2;
	var $disx=ev.pageX-centerx;
	var $disy=ev.pageY-centery;
	var $rotate=Math.abs($disx)/($(".cont_icn").eq(0).width()/2)*10;
	var $distop=Math.abs($disx)/($(".cont_icn").eq(0).width()/2)*10;
	$disx>0?$rotate=$rotate:$rotate=-$rotate;
	$disy>0?$distop=$distop:$distop=-$distop;
	$(".cont_icn").eq(0).css("top",$distop).css("transform","rotateY("+$rotate+"deg)");
}
function con_ic_an2(){
	$(".cont_icn").eq(0).css("transition","1s").css("transform","rotateY(0)").css("top",0)
}
$(".prolink").on("click",function(){
	$("#fixbox span").eq(2).trigger("click");
})
$(".cont_link").on("click",function(){
	$("#fixbox span").eq(3).trigger("click");
})