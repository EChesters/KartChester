describe("Nodes finder", function() {
  it("should return the closest node to a point", function() {
    var nodes = [new Point(0, 0, 1),
                   new Point(0, 100, 2), new Point(100, 100, 3)];
    var search_point = new Point(90, 90, 4);
    var node_finder = new NodeFinder(nodes);

    var closest_node = node_finder.get_closest_node_to(search_point);
    expect(closest_node).toEqual(nodes[2]);
  });


});
