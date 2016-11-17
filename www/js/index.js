<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
  
  	$('#taprandom').on("tap",function random(){
    	alert (return !Math.round(Math.random()));
 	});                       

	
  	});   

