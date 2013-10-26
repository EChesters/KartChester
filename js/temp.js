$(document).ready(function (e) {

	$('#board').click(function (e) {
		var posX = ($(this).offset().left);
		var boardWidth = ($(this).width()) / 100;
		var finalX = (e.pageX - posX)/boardWidth;

		var	posY = $(this).offset().top;
		var boardHeight = ($(this).height()) / 100;
		var finalY = (e.pageY - posY)/boardHeight;

    });
});