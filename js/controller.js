
function start_game() {
	var game = new Game(1);
	var frontend = new Frontend(game);
	game.init();
	setInterval(function(){game.update(frontend);},1000);
}

window.setTimeout(start_game, 3000);