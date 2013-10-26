//game
function Game(number_of_players) {
  this.number_of_players = number_of_players;
  this.players_position = Array();
  this.players = Array();

  this.increment = 1;

  this.update = function(frontend) {
    this.update_players();
    var players_position = Array();

    for (var i=0;i<this.players.length;i++){
        players_position.push(this.players[i].current_location.to_coordinates())
    }

    frontend.update(this.players_position);
  }


  this.init =  function () {
      this.graph_wrapper = new GraphWrapper(default_graph);
      this.start_game_location = new Location(this.graph_wrapper.get_segment_for_id(1),0);
      this.increment = 3;
      var player = new Player(1,this.start_game_location);
      this.add_player(player);

  }


  this.add_player = function (player) {
      this.players.push(player);
  }

  this.update_players = function () {
      for (var i =0 ; i<this.players.length; i++) {
          this.update_position_of_player(this.players[i],default_next_segment)
      }
  }

  this.update_position_of_player = function (player, next_segment) {
      var player_location = player.current_location;
      var new_position = (player_location.segment_position * player_location.current_segment.len) + this.increment;
      if (new_position <= player_location.current_segment.len) {
              player.current_location.segment_position = just_2_decimals(new_position/player_location.current_segment.len);
      }
      else
      {
          new_position -= player_location.current_segment.len;
          player.current_location.current_segment = next_segment;

          if (new_position>player_location.current_segment.len) { new_position = player_location.current_segment.len}

          player.current_location.segment_position = just_2_decimals(new_position/player_location.current_segment.len);

      }

  }

}

var default_graph =
    [
        {
            "id": 1,
            "start_x": 10,
            "start_y": 10,
            "end_x": 20,
            "end_y": 20,
            "connected_edges": [2]
        },
        {
            "id": 2,
            "start_x": 20,
            "start_y": 20,
            "end_x": 30,
            "end_y": 20,
            "connected_edges": [1,3]
        },
        {
            "id": 3,
            "start_x": 30,
            "start_y": 20,
            "end_x": 40,
            "end_y": 10,
            "connected_edges": [2,4]
        },
        {
            "id": 4,
            "start_x": 30,
            "start_y": 20,
            "end_x": 40,
            "end_y": 30,
            "connected_edges": [2,3]
        }
    ]


var default_next_segment = new Segment(2, new Point(20,20), new Point(30,20));


function random_player_position_generator(players) {
  var positions = Array();
  for (var i = 0; i < players; i++) {
    positions[i] = Array([Math.floor((Math.random()*100)+1), Math.floor((Math.random()*100)+1)]);
    
  }
  return positions;
}
