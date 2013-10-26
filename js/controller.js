var game = new Game(1);
var frontend = new Frontend(game);
game.init();
setInterval(function(){game.update(frontend);},1000);
