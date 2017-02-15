$(function(){
	var arr=findData(1);
	renderJob(arr);
	$(".z-comwid").delegate("a","click",function(){
		var id;
		id=$(this).attr("flag");
		var arr;
		$(this).addClass("z-a-active").siblings().removeClass("z-a-active");
		arr=findData(id);
		renderJob(arr);
	})
	
})
function findData(id){
	var data= D.jobinfo;
	console.log(data)
	var arr=[];
	$.each(data,function(i,item){
		if(item.pid==id){
			arr.push(item)
		}
	})
	console.log(arr)
	return arr;
}

function renderJob(data){
	var str="";
//	$(".m-job-text-wrap")
	$.each(data,function(i,item){
		str+='<div class="job-name">'+
'							<span class="u-job-name">'+item.name+'</span>'+
//'							<p>工作地点：北京</p>'+
'						</div>'+
'						<div class="job-resp">'+
'							<span class="u-job-resp">岗位职责</span>'+
'							<p>'+findchild(item.responsibility)+'</p>'+
'                       </div>'+
'						<div class="job-specification">'+
'							<span class="u-job-specification">任职要求</span>'+
'							<p>'+findchild(item.specification)+'</p>'+
'                       </div>';
		
	})
	$(".m-job-text-wrap").html(str);
}
function findchild(data){
	var str="";
//	if(data.length){
//		$.each(data, function(i,item) {
//			str+=findchild(item)
//		});
//	}else{
//		if(data.tit){
//			str+=data.tit+"<br/>";
//		}
//		if(typeof item=="string"){
//			str+=item+"<br/>";
//		}else{
//			$.each(data.text,function(i,item){
//				str+=findchild(item);
//			})
//		}
//		
//	}
//	

if(data.constructor == Array){//数组
		$.each(data, function(i,item) {
			str+=findchild(item)
		});
	}else if(data.constructor == Object){
		console.log(data)
		if(data.tit){//有标题
			str+=data.tit+"<br/>";
		}
		if(data.text.constructor == String){
			str+=data.text+"<br/>";
		}else{
			$.each(data.text,function(i,j){//数组
				str+=findchild(j);
			})
		}
//		if(typeof data.text=='string'){//字符串
//			str+=data.text+"<br/>";
//		}else{
//			$.each(data.text,function(i,item){//数组
//				str+=findchild(item);
//			})
//		}
	}else{
		str+=data+"<br/>";
	}
	return str;

}
