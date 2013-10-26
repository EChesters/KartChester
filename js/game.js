//game
function Game(number_of_players) {
  this.number_of_players = number_of_players;
  this.players_position = Array();

  this.update = function(frontend) {
    this.players_position = random_player_position_generator(this.number_of_players);
    frontend.update(this.players_position);
  }
}

function random_player_position_generator(players) {
  positions = Array();
  for (var i = 0; i < players; i++) {
    positions[i] = Array([Math.floor((Math.random()*100)+1), Math.floor((Math.random()*100)+1)]);
    
  }
  return positions;
}
