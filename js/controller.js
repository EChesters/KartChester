var frontend = new Frontend();
var game = new Game(1);

setInterval(function(){game.update(frontend);},1000);

