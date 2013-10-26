describe("Segment parser", function() {
  it("should convert an empty JSON list into an empty list of segments", function() {
    var map_edges = [];
    var parser = new SegmentParser();
    expect(parser.parse(map_edges)).toEqual([]);
  });

  it("should convert a non-empty JSON map into the correct segments", function() {
    var map_edges = [{"id": "1", "start_x": 100, "start_y": 100, "end_x": 200, "end_y": 200, "connected_edges":[]},
	             {"id": "2", "start_x": 300, "start_y": 300, "end_x": 400, "end_y": 400, "connected_edges":[]}];
    var parser = new SegmentParser();
    var segments = parser.parse(map_edges);
    expect(segments.length).toEqual(2);
    expect(segments[0].start_point).toEqual(new Point(100, 100));
    expect(segments[0].end_point).toEqual(new Point(200, 200));
    expect(segments[1].start_point).toEqual(new Point(300, 300));
    expect(segments[1].end_point).toEqual(new Point(400, 400));
  });
});
