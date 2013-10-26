//game
function Game(number_of_players) {
  this.number_of_players = number_of_players;
  this.players_position = Array();
  this.players = Array();

  this.increment = 1;

  this.update = function(frontend) {
    this.players_position = random_player_position_generator(this.number_of_players);
    frontend.update(this.players_position);
  }



  this.init_with_graph =  function (graph_wrapper){
        this.graph_wrapper = graph_wrapper;
        this.start_game_location = new Location(graph_wrapper.get_segment_for_id(1),0);
   }

  this.add_player = function (player) {
      this.players.push(player);
  }

  this.update_position_of_player = function (player, next_segment) {
      var player_location = player.location;
      var new_position = player_location.segment_position * player_location.segment.len + this.increment;
      if (new_position <= player_location.segment.len) {
              player.location.segment_position = just_2_decimals(new_position/player_location.segment.len);
      }else {
          new_position -= player_location.segment.len;
          player.location.segment = next_segment;

          if (new_position>player_location.segment.len) { new_position = player_location.segment.len}

          player.location.segment_position = just_2_decimals(new_position/player_location.segment.len);

      }

  }

}

function random_player_position_generator(players) {
  var positions = Array();
  for (var i = 0; i < players; i++) {
    positions[i] = Array([Math.floor((Math.random()*100)+1), Math.floor((Math.random()*100)+1)]);
    
  }
  return positions;
}
