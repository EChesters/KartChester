var GraphWrapper = require('./graph_wrapper_server.js');
var Player = require('./player_server.js');

function GameServer() {

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
      this.next_target_node = this.graph_wrapper.get_node_for_id(2);
      this.increment = 10;

  }


  this.create_player_with_id = function(player_id) {
      return new Player(player_id, this.start_game_location, this.next_target_node);
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
    [{"id":1,"x":33,"y":24.375,"connected_nodes":[2,3]},
     {"id":2,"x":66.625,"y":24.875,"connected_nodes":[1,4]},
     {"id":3,"x":33.125,"y":50.25,"connected_nodes":[1,4,5]},
     {"id":4,"x":66.625,"y":50.375,"connected_nodes":[3,2,6]},
     {"id":5,"x":32.75,"y":74.625,"connected_nodes":[6,3]},
     {"id":6,"x":67.375,"y":74.125,"connected_nodes":[4,5]}]



function random_player_position_generator(players) {
  var positions = Array();
  for (var i = 0; i < players; i++) {
    positions[i] = Array([Math.floor((Math.random()*100)+1), Math.floor((Math.random()*100)+1)]);
    
  }
  return positions;
}


module.exports = GameServer;