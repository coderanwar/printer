
$(function() {
	var iHeight =	$(".boxMsg").outerHeight();
	var iWidth =	$(".boxMsg").outerWidth();
	
	//alert(iHeight + "/" + iWidth);
	$(".boxMsg").css( "margin-top", "-" + (iHeight/2) + "px");
	$(".boxMsg").css( "margin-left", "-" + (iWidth/2) + "px");
	 

});
