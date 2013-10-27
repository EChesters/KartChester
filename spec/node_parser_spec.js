describe("Node parser", function() {
  it("should convert an empty JSON list into an empty list of nodes", function() {
    var nodes = [];
    var parser = new NodeParser();
    expect(parser.parse(nodes)).toEqual([]);
  });

  it("should convert a non-empty JSON map into the correct nodes", function() {
    var map_nodes = [{"id": 1, "x": 100, "y": 100, "connected_nodes":[]},
	             {"id": 2, "x": 300, "y": 300, "connected_nodes":[]}];
    var parser = new NodeParser();
    var nodes = parser.parse(map_nodes);
    expect(nodes.length).toEqual(2);
    expect(nodes[0].id).toEqual(1);
    expect(nodes[0].x).toEqual(100);
    expect(nodes[0].y).toEqual(100);
    expect(nodes[1].id).toEqual(2);
    expect(nodes[1].x).toEqual(300);
    expect(nodes[1].y).toEqual(300);
  });
});
