
function start_game() {
	var game = new Game(1);
	var frontend = new Frontend(game);
	game.init();
	setInterval(function(){game.update(frontend);},1000);
}

function start_countdown() {
	window.setTimeout($('#countdown_1').show(), 0);

	window.setTimeout($('#countdown_1').hide(), 1000);
	window.setTimeout($('#countdown_2').show(), 1000);
	
	window.setTimeout($('#countdown_2').hide(), 1000);
	window.setTimeout($('#countdown_3').show(), 2000);

	window.setTimeout($('#countdown_3').show(), 3000);
}


window.setTimeout(start_countdown, 0);
window.setTimeout(start_game, 3000);