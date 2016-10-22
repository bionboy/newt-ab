$(document).ready(function(){
	$(".icon").fadeTo('fast',.7);

	$(".icon").mouseenter(function(){
		$(this).fadeTo('fast',1);
	});
	$(".icon").mouseleave(function(){
		$(this).fadeTo('fast',.7);
	});
	//$(".icon").click(function() {
  		//$(this).toggle("puff");
	//});
    $("#forums").click(function(){
		$("#forumlinks").slideToggle('slow');
	});

	var hours = new Date().getHours();
	var mins = new Date().getMinutes();
	console.log(hours);
	console.log(mins);
	if(hours >= 21){
		$("body").css('background-image','url("backgrounds/red-background-night.jpg")');
		$("#links").addClass('night-links');
		$("#forumlinks").addClass('night-links');
	}
	else{
		$("body").css('background-image','url("backgrounds/background.jpg")');          // also make a change so that you can see red icons at night and maybe blue out red icons. 
	}
});
