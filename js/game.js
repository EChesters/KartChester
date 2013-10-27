function Game(number_of_players) {
  this.number_of_players = number_of_players;
  this.players_position = Array();
  this.players = Array();

  this.increment = 1;

  this.update = function(frontend) {
    this.update_players();
    var players_position = Array();

    for (var i=0;i<this.players.length;i++){
        players_position.push(this.players[i].current_position)
    }

    frontend.update(players_position);
  }

  this.screen_click_from_player = function(id, x, y) {
    var player = this.get_player_by_id(id);
    var click_point = new Point(x, y, 1);
    var all_nodes = this.graph_wrapper.get_all_nodes();
    var node_finder = new NodeFinder(all_nodes);
    var next_node = node_finder.get_closest_node_to(click_point);
    var move_validator = new MoveValidator();

    if (move_validator.validate(player.target_node, next_node, this.graph_wrapper))
    {
      player.next_node = next_node;
    }
  }

  this.get_player_by_id = function(id) {
    return this.players[0];
  }

  this.init =  function () {
      this.graph_wrapper = new GraphWrapper(default_graph);
      this.start_game_location = this.graph_wrapper.get_node_for_id(1);
      var target_node = this.graph_wrapper.get_node_for_id(2);
      this.increment = 10;
      var player = new Player(1,this.start_game_location, target_node);
      this.add_player(player);

  }


  this.add_player = function (player) {
      this.players.push(player);
  }

  this.update_players = function () {
      for (var i =0 ; i<this.players.length; i++) {
          this.update_position_of_player(this.players[i],this.players[i].next_node);
      }
  }

  this.update_position_of_player = function (player, next_node) {
      console.log(next_node);

      var player_location = player.current_position;

      var position_calculator = new PositionCalculator(this.increment);
      var new_position = position_calculator.get_next_position(player_location, player.target_node);

      player.current_position = new_position;

      if ((player.current_position.x === player.target_node.x)
          && (player.current_position.y === player.target_node.y))
      {
          var a_node = player.target_node;
          player.target_node = next_node;
          player.next_node  = a_node;
      }

  }

}

var default_graph =
    [{"id":0,"x":21.2,"y":1.9,"connected_nodes":[1,7]},
     {"id":1,"x":1.6901408450704225,"y":58.2,"connected_nodes":[0,2]},
     {"id":2,"x":33.5,"y":72.1,"connected_nodes":[1,3]},
     {"id":3,"x":58.2,"y":96.5,"connected_nodes":[2,4]},
     {"id":4,"x":65.7,"y":85.5,"connected_nodes":[3,5]},
     {"id":5,"x":74.3,"y":72.5,"connected_nodes":[4,6]},
     {"id":6,"x":84.2,"y":59.4,"connected_nodes":[5,7]},
     {"id":7,"x":96.8,"y":28.8,"connected_nodes":[6,0]}]



function random_player_position_generator(players) {
  var positions = Array();
  for (var i = 0; i < players; i++) {
    positions[i] = Array([Math.floor((Math.random()*100)+1), Math.floor((Math.random()*100)+1)]);
    
  }
  return positions;
}
