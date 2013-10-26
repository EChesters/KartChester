describe("Segment finder", function() {
  it("should return the same segment when the point is already on that segment", function() {
    var segments = [new Segment("1", new Point(0, 0), new Point(0, 100)),
                    new Segment("2", new Point(100, 0), new Point(100, 100))];
    var search_point = new Point(0, 50);
    var segment_finder = new SegmentFinder(segments);

    var closest_segment = segment_finder.get_closest_segment_to(search_point);
    expect(closest_segment).toEqual(segments[0]);
  });

  it("should return the correct segment when the point is between two segments", function() {
    var segments = [new Segment("1", new Point(0, 0), new Point(0, 100)),
                    new Segment("2", new Point(100, 0), new Point(100, 100))];
    var search_point = new Point(60, 50);
    var segment_finder = new SegmentFinder(segments);
    
    var closest_segment = segment_finder.get_closest_segment_to(search_point);
    expect(closest_segment).toEqual(segments[1]);
  });
});
