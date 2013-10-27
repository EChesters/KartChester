$(document).ready(function() {

});


function start_game() {
	var game = new Game(1);
	var frontend = new Frontend(game);

	var window_width = $(window).width();
	var window_height = $(window).height();

	var map_width = $('#map').width();
	var map_height = $('#map').height();

	var maximised_map_size = frontend.calculate_size(window_height, window_width, map_height, map_width);

	$('#map').width(maximised_map_size[1]).height(maximised_map_size[0]);
	$('#board').width(maximised_map_size[1]).height(maximised_map_size[0]);

	game.init();
	setInterval(function(){game.update(frontend);},1000);
}

window.setTimeout(start_game, 300);