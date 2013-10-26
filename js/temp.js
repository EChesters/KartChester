$(document).ready(function (e) {

	$('#board').click(function (e) {
		var posX = ($(this).offset().left);
		var	posY = $(this).offset().top;
        console.log((e.pageX - posX) + ' , ' + (e.pageY - posY));
    });

});