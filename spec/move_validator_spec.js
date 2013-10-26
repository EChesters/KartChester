describe("Move validator", function() {
  it("should report a valid move for moving to a segment connected to the current segment", function() {
    var fake_graph_wrapper = {"get_connected_edges_ids": function(id_to_look_for) { return [2,3];}};
    var player_location = new Location(new Segment(1, new Point(100, 100), new Point(200, 200)));
    var target_segment = new Segment(3, new Point(200, 200), new Point(300, 300));
    var move_validator = new MoveValidator();

    expect(move_validator.validate(player_location, target_segment, fake_graph_wrapper)).toEqual(true);
  });

  it("should report a invalid move for moving to a segment not connected to the current segment", function() {
    var fake_graph_wrapper = {"get_connected_edges_ids": function(id_to_look_for) { return [2,3];}};
    var player_location = new Location(new Segment(1, new Point(100, 100), new Point(200, 200)));
    var target_segment = new Segment(4, new Point(200, 200), new Point(300, 300));
    var move_validator = new MoveValidator();

    expect(move_validator.validate(player_location, target_segment, fake_graph_wrapper)).toEqual(false);
  });
});
