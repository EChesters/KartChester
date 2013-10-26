function frontend() {
  function update(players_positions) {
    for (var i = 0; i < players_positions.length; i++) {
      $('#player'+ i+1).top(players_position[i][0]);
      $('#player'+ i+1).top(players_position[i][1]);
  }
}
