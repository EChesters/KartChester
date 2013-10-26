describe("Game", function(){

    var game;
    var one_edge_graph;
    var graph_wrapper;
    var player;
    var id_of_player;

    beforeEach(function(){
         game = new Game(1);
         one_edge_graph =
            [
                {
                    "id": "1",
                    "start_x": 100,
                    "start_y": 100,
                    "end_x": 100,
                    "end_y": 200,
                    "connected_edges": [2]
                },
                {
                    "id": "2",
                    "start_x": 100,
                    "start_y": 200,
                    "end_x": 100,
                    "end_y": 300,
                    "connected_edges": []
                }
            ]

        graph_wrapper = new GraphWrapper(one_edge_graph);
        game.graph_wrapper = graph_wrapper;
        game.start_game_location = new Location(graph_wrapper.get_segment_for_id(1),0);



        id_of_player = 1;
        player = new Player(id_of_player, game.start_game_location);
        game.add_player(player);
    })

    it('should update the position of a player on an edge while it does not exceeds it', function() {

        var game_increment = 10;
        var expected_position = 0.1;

        game.increment = game_increment;

        game.update_position_of_player(player, null);

        expect(player.current_location.segment_position).toEqual(expected_position)

    })

    it('should update the position of a player on an edge while it does not exceeds it', function() {

        var game_increment = 150;
        var expected_position = 0.5;
        var expected_segment = new Segment("1",  new Point(100,200), new Point(100,300));

        game.increment = game_increment;

        game.update_position_of_player(player, expected_segment);

        expect(player.current_location.current_segment).toEqual(expected_segment)
        expect(player.current_location.segment_position).toEqual(expected_position)

    })

})
