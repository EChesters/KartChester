//game
function game(number_of_players, frontend) {
  this.number_of_players = players;
  this.players_position = Array();
  this.frontend = frontend;

  function update() {
    this.frontend.update(random_player_position_generator(this.number_of_players);
  }
}

function random_player_position_generator(players) {
  positions = Array();
  for (var i = 0; i < players.length; i++) {
    positions[i] = Array(Math.floor((Math.random()*100)+1), Math.floor((Math.random()*100)+1));
  }
  return positions;
}
