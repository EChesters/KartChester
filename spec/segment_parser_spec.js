describe("Segment parser", function() {
  it("should convert an empty JSON list into an empty list of segments", function() {
    map_edges = [];
    segment_parser = new segment_parser();
    expect(segment_parser.parse(map_edges)).toEqual([]);
  });
});
