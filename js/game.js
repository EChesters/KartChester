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

    frontend.update(players_position);
  }

  this.screen_click_from_player = function(id, x, y) {
    var player = this.get_player_by_id(id);
    var click_point = new Point(x,y);
    var all_segments = this.graph_wrapper.get_all_segments();
    var segment_finder = new SegmentFinder(all_segments);
    var target_segment = segment_finder.get_closest_segment_to(click_point);

    var move_validator = new MoveValidator();

    if (move_validator.validate(player.current_location, target_segment, this.graph_wrapper))
    {
      player.next_segment = target_segment;
    }
  }

  this.get_player_by_id = function(id) {
    return this.players[0];
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
          this.update_position_of_player(this.players[i],this.players[i].next_segment)
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
            "start_x": 33.33,
            "start_y": 25,
            "end_x": 66.66,
            "end_y": 25,
            "connected_edges": [4, 5]
        },
        {
            "id": 2,
            "start_x": 33.33,
            "start_y": 50,
            "end_x": 66.66,
            "end_y": 50,
            "connected_edges": [4, 5, 6, 7]
        },
        {
            "id": 3,
            "start_x": 33.33,
            "start_y": 75,
            "end_x": 66.66,
            "end_y": 75,
            "connected_edges": [6,7]
        },
        {
            "id": 4,
            "start_x": 33.33,
            "start_y": 25,
            "end_x": 33.33,
            "end_y": 50,
            "connected_edges": [1, 2, 6]
        },
        {
            "id": 5,
            "start_x": 66.66,
            "start_y": 25,
            "end_x": 66.66,
            "end_y": 50,
            "connected_edges": [1, 2, 7]
        },
        {
            "id": 6,
            "start_x": 33.33,
            "start_y": 50,
            "end_x": 33.33,
            "end_y": 75,
            "connected_edges": [4, 3]
        },
        {
            "id": 7,
            "start_x": 66.66,
            "start_y": 50,
            "end_x": 66.66,
            "end_y": 75,
            "connected_edges": [3,5]
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
