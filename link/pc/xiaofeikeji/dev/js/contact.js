$(function(){
	var map = new BMap.Map("mapcontainer");
	var point = new BMap.Point(116.404, 39.915);
	map.centerAndZoom(point, 12);
	var top_left_navigation = new BMap.NavigationControl({
		anchor: BMAP_ANCHOR_TOP_LEFT, 
		offset:new BMap.Size(100,30),
		type: BMAP_NAVIGATION_CONTROL_PAN
	}); //左上角缩放按钮

	var top_right_navigation = new BMap.NavigationControl({
		anchor: BMAP_ANCHOR_TOP_RIGHT, 
		offset:new BMap.Size(100,30),
		type: BMAP_NAVIGATION_CONTROL_ZOOM
	}); //左上角缩放按钮

	map.addControl(top_left_navigation);

	map.addControl(top_right_navigation);



	var pt=new BMap.Point(116.256467, 40.0727);
	var myIcon = new BMap.Icon("../img/mark.png", new BMap.Size(60,120),{
		imageSize:new BMap.Size(60,120)
	});
	var mymarker = new BMap.Marker(pt,{icon:myIcon});
	
	
	map.setCenter(pt)
//	map.setViewport({pt,point})
	map.addOverlay(mymarker)
})

