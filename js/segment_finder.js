function SegmentFinder(segments) {
  this.get_closest_segment_to = function(point) {
    if (segments.length === 0)
    {
      return null;
    }
    else
    {
      var closest_segment = segments[0];

      for (var index = 1; index < segments.length; index++)
      {
         if (segments[index].distance_from_point(point) < closest_segment.distance_from_point(point))
	 {
	    closest_segment = segments[index];
	 }
      }
    }

    return closest_segment;
  }
}
