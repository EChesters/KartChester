describe("Segment parser", function() {
  it("should convert an empty JSON list into an empty list of segments", function() {
    var map_edges = [];
    var parser = new segment_parser();
    expect(parser.parse(map_edges)).toEqual([]);
  });

  it("should convert a non-empty JSON map into the correct segments", function() {
    var map_edges = [{"id": "1", "start_x": 100, "start_y": 100, "end_x": 200, "end_y": 200, "connected_edges":[]},
	         {"id": "2", "start_x": 300, "start_y": 300, "end_x": 400, "end_y": 400, "connected_edges":[]}];
    var parser = new segment_parser();
    expect(parser.parse(map_edges).length).toEqual(2);
  });
});
