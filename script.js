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
});
