describe("Game", function(){

    var game;
    var graph_with_three_nodes;
    var graph_wrapper;
    var player;
    var id_of_player;

    beforeEach(function(){
         game = new Game(1);
         graph_with_three_nodes =
            [
                {
                    "id": 1,
                    "x": 100,
                    "y": 100,
                    "connected_nodes": [2, 3]
                },
                {
                    "id": 2,
                    "x": 100,
                    "y": 200,
                    "connected_nodes": [1, 3]
                },
                {
                    "id": 3,
                    "x": 200,
                    "y": 200,
                    "connected_nodes": [1,2]
                }
            ]

        graph_wrapper = new GraphWrapper(graph_with_three_nodes);
        game.graph_wrapper = graph_wrapper;
        game.start_game_location = graph_wrapper.get_node_for_id(1);

        id_of_player = 1;
        player = new Player(id_of_player, game.start_game_location, graph_wrapper.get_node_for_id(2));
        game.add_player(player);
    })

    it('should update the position of a player whilst moving between nodes', function() {
        var game_increment = 10;
        var expected_position = new Point(100, 110, 1);

        game.increment = game_increment;

        game.update_position_of_player(player, graph_wrapper.get_node_for_id(2));

        expect(player.current_position).toEqual(expected_position)
    })

    it('should update the position of a player when reaching a node and stopping', function() {

        var game_increment = 150;
        var expected_position = new Point(100, 200, 1);

        game.increment = game_increment;

        var next_node = graph_wrapper.get_node_for_id(3);

        game.update_position_of_player(player, next_node);

        expect(player.current_position).toEqual(expected_position);
        expect(player.target_node).toEqual(next_node);
    })

    it("should update a player's next move when a screen click is received", function() {
        game.screen_click_from_player(2, 100, 200);

        expect(player.next_node).toEqual(new Point(100, 200, 2));
    })
})
