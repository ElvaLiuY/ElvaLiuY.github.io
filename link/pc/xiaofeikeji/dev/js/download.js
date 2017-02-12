$(function(){
	computeHeight($(".g-body"));
	$(".u-down-wrap").delegate(".u-down","click",function(){
		var mark=$(this).attr("mark");
		$(".u-img-code img").hide();
		$(".u-img-code").find("."+mark).show();
	})
	
})