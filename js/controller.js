var frontend = new Frontend();
var game = new Game(1);
game.init();
setInterval(function(){game.update(frontend);},1000);

