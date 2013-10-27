describe("Move validator", function() {
  it("should report a valid move for moving to a segment connected to the current segment", function() {
    var fake_graph_wrapper = {"get_connected_node_ids": function(id_to_look_for) { return [2,3];}};
    var target_node = new Point(100, 100, 1)
    var next_node = new Point(200, 200, 2);
    var move_validator = new MoveValidator();

    expect(move_validator.validate(target_node, next_node, fake_graph_wrapper)).toEqual(true);
  });

  it("should report a invalid move for moving to a segment not connected to the current segment", function() {
      var fake_graph_wrapper = {"get_connected_node_ids": function(id_to_look_for) { return [2,3];}};
      var target_node = new Point(100, 100, 1)
      var next_node = new Point(200, 200, 4);
      var move_validator = new MoveValidator();

      expect(move_validator.validate(target_node, next_node, fake_graph_wrapper)).toEqual(false);
  });
});
