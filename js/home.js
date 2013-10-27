$(document).ready(function() {
	
	$(".logo").hide(); $(".logoText").hide();
	$(".logo").slideDown("slow");
	//$('#board').hide();

	$(".avatar-preview").click(function(e) {
		e.preventDefault();
		var img = $(this).attr('src');
		$('#avatarimg').attr('src', img);
		$('#welcome-panel').hide();
		$('#board').show();

	});

});