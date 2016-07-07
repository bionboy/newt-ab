$(document).ready(function(){
	$(".icon").fadeTo('fast',.5);

	$(".icon").mouseenter(function(){
		$(this).fadeTo('fast',1);
	});
	$(".icon").mouseleave(function(){
		$(this).fadeTo('fast',.5);
	});

	$("#hackernewsbutton").click(function(){
		$("#hackernews").slideToggle('slow');
	});
	$("#youtubefeedbutton").click(function(){
		$("#youtubefeed").slideToggle('slow');
	});
	$("#quorafeedbutton").click(function(){
		$("#quorafeed").slideToggle('slow');
	});

    $("#forums").click(function(){
		$("#forumlinks").slideToggle('slow');
	});

	var time = new Date().getHours();
	console.log(time);
	if(time >= 21){
		$("body").css('background-image','url("backgrounds/background-night.jpg")');
	} else{
		$("body").css('background-image','url("backgrounds/background.jpg")');
	}
});