window.onload=function(){
	setLayout();
	var rounds=document.getElementsByClassName("roundWrap");
	var arrScroll=[];
	var scale=2;
	var arrNow=[];
	var sTime=document.getElementById("time").children[0];
	var mask=document.getElementById("mask");
	var setBtn=document.getElementById("setBtn");
	var time=0;
	var timer=0;
	var star=document.getElementById("start");
	var startBtn=document.getElementById("startBtn");
	var setBtn=document.getElementById("setBtn");
	var oalert=document.getElementsByClassName("alert")[0];
	var resetBtn=document.getElementById("resetBtn");
	var music=document.getElementById("music");
	
	/***隐藏首页****/
	startBtn.addEventListener("touchend",function(){
		star.style.display="none";
	})
	/****重置时间mask消失 提醒消失 停止播放音乐****/
	resetBtn.addEventListener("touchend",function(){
		oalert.style.display="none";
		mask.style.display="none";
		setBtn.style.opacity=1;
		music.pause();
	})
	for(var i=0; i<rounds.length; i++){
		arrScroll[i]=new MScroll(rounds[i],"y",false,true,true);
		setScroll(i);
		arrNow[i]=0;
	}
	setBtn.addEventListener(
		"touchend",
		function(){
			mask.style.display="block";
			time=parseInt(""+arrNow[0]+arrNow[1])*60+parseInt(""+arrNow[2]+arrNow[3]);
			autoTime();
		},
		false
	);
	function autoTime(){
		clearInterval(timer);
		for(var i=0;i<arrNow.length;i++){
			var targetScroll=-arrNow[i]*36*scale;
			arrScroll[i].iScroll=targetScroll;
			arrScroll[i].setCss();
		}
		timer=setInterval(
			function(){
				time--;
				if(time<0){
					setBtn.style.opacity=0;
					oalert.style.display="block";

					music.play();
					clearInterval(timer);
				} else {
					var sTime= toDB(parseInt(time/60))+toDB(time%60);
					for(var i=0; i<sTime.length;i++){
						autoScroll(i,sTime[i])
					}
				}
			},
			1000
		);
	}
	function autoScroll(i,target){
		var targetScroll=-target*36*scale;
		var dis= targetScroll - arrScroll[i].iScroll;
		if(Math.abs(dis/scale) > 36)
		{
			dis = (360- Math.abs(dis/scale)) * scale;
			arrScroll[i].tweenMove(dis,"easeOut",
				function()
				{
					this.iScroll=targetScroll;
					this.setCss();
				}
			);	
		}
		else
		{
			arrScroll[i].tweenMove(dis,"easeOut");		
		}
	
	}
	function setScroll(nub) {
		var last=0;
		var lastTime=0;
		var lastDis=0;
		var lastTimeDis=0;
		arrScroll[nub].onscrollstart=function(){ 
			var last=this.iScroll;
			var lastTime=new Date().getTime();
			lastTimeDis= 0;
			lastDis=0;
		};
		arrScroll[nub].onscroll=function(){ 
			var nowTime=new Date().getTime();
			var deg=-this.iScroll/scale;
			this.oScroll.style.transform="rotateX("+deg+"deg)";
			lastTimeDis = nowTime - lastTime;
			lastTime = nowTime;
			lastDis = this.iScroll - last;
			last = this.iScroll;
			var now = Math.round(deg /36)%10;
			now= now<0 ? now+10 : now;
			arrNow[nub]=now;
			toTime();
		};
		arrScroll[nub].onscrollend=function(){ 
			clearInterval(this.timer);
			var speed=lastDis/lastTimeDis;
			speed= isNaN(speed)? 0 : speed;
			var dis=speed*200;
			var now = -Math.round((dis+this.iScroll) / scale /36);
			if(nub%2 == 0){
				if(now<0){
					now=0;
				}
				if(now>5){
					now=5;
				}
			}
			dis =  -now*36*scale - this.iScroll;
			this.tweenMove(dis,"easeOut");
		};
	}
function toTime(){
		sTime.innerHTML=""+arrNow[0]+arrNow[1]+":"+arrNow[2]+arrNow[3];
	}
};
function toDB(nub){
	return nub<10? "0"+nub:""+nub;
}
function setLayout(){
	/******创建计数数字******/
	/***
	 * 1.分钟的首位和秒钟首位最大为5，范围0-5
	 * 2.……末尾范围为0-9
	 * **********/
	var rounds=document.getElementsByClassName("roundWrap");
	for(var i=0; i<rounds.length; i++){
		var str="";
		for(var j=0; j<10; j++){
			if(i%2 == 0&& j<4){
				str =  "<div><span></span>"+str+"</div>";
			} else {
				str =  "<div><span>"+(9-j)+"</span>"+str+"</div>";
			}
		}
		str="<div class='round'>"+str+"</div><div class='bg'></div>";
		rounds[i].innerHTML=str;
	}
}
	
