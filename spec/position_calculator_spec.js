describe("Position calculator", function() {
  it("should calculate the next position when moving between two points", function() {
    var current_position = new Point(0, 0);
    var target_node = new Point(10, 10);
    var increment = Math.sqrt(2);

    var position_calculator = new PositionCalculator(increment);
    var next_position = position_calculator.get_next_position(current_position, target_node);

    expect(next_position).toEqual(new Point(1, 1));
  });

  it ("should not move further than the target node", function() {
      var current_position = new Point(0, 0);
      var target_node = new Point(0.5, 0.5);
      var increment = Math.sqrt(2);

      var position_calculator = new PositionCalculator(increment);
      var next_position = position_calculator.get_next_position(current_position, target_node);

      expect(next_position).toEqual(new Point(0.5, 0.5));
  });
});
