function SegmentFinder(segments) {
  this.get_closest_segment_to = function(point) {
    if (segments.length === 0)
    {
      return null;
    }
    else
    {
      var min = 10000000;
      var closest_segment = null;

      for (var index = 0; index < segments.length; index++)
      {
         if ((segments[index].distance_from_point(point) < min)
             && (segments[index].is_point_around(point)))
	         {
	            closest_segment = segments[index];
                min = closest_segment.distance_from_point(point);
	      }
      }
    }

    return closest_segment;
  }
}
