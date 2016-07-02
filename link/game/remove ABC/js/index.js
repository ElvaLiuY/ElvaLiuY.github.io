window.onload=function(){
	var btn=document.getElementsByTagName("input")[0];
	var playbox=document.getElementById('playbox');
	var spans=playbox.getElementsByTagName('span');
	var scorebox=document.getElementById('scorebox');
	var scores=scorebox.getElementsByTagName('em');
	var arr=[];
	var timer=null;
	var newarr=[];
	var onoff=false;
	var score1=score2=0;
	var tdis=2000;
//	console.log("a".charCodeAt(0))
	for(var i=65;i<=90;i++){
		arr.push([String.fromCharCode(i),i])
	}
//	console.log(arr)
	btn.onclick=function(){
		clearInterval(timer);
		if(!onoff){
			this.style.value="点击停止";
			play();
		}else{
			this.style.value="点击开始";
		}
		onoff=!onoff;
	}
	function play(){
		timer=setInterval(function(){
				star();
				if(score1%10==0){
					clearInterval(timer);
					tdis=2000-score1/10*300;
					console.log(tdis)
					play();
				}
		},tdis)
	}
	function star(){
		var radom=Math.floor(Math.random()*arr.length);
		var span=document.createElement('span');
		span.innerHTML=arr[radom][0];
		span.style.left=450*radom/arr.length+"px";
		playbox.appendChild(span);
//		var _this=this;
		objmove(span)
//		console.log(span)
		newarr.push(arr[radom])
//		console.log(arr[radom])
	}
	function objmove(a){
		move(a,{
			top:{
				target:500,
				duration:2000,
				fx:'linear'
			}
		},function(){
			playbox.removeChild(a)
			newarr.shift();
			scores[1].innerHTML=(++score2);
			condition()
//			console.log(newarr.length,newarr);
		})
	}
	document.onkeydown=function(ev){
		if(ev.keyCode>=65&&ev.keyCode<=90){
			for(var i=0;i<newarr.length;i++){
				if(ev.keyCode==newarr[i][1]){
					scores[0].innerHTML=(++score1);
					condition();
					clearInterval(spans[i].timer)
					playbox.removeChild(spans[i])
					newarr.splice(i,1)
//					newarr.join(newarr[i]).split();
					console.log(newarr.length,newarr)
//					star();
					return
				}
			}
		}
	}
	function condition(){
		if(score1==50&&score2<5){
			alert("恭喜您，挑战成功！")
			return clearInterval(timer);
		}else if(score2==5){
			alert("很遗憾，挑战失败！")
			return clearInterval(timer);
		}
	}
}

