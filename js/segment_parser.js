function segment_parser() {
  this.parse = function(map) {
    var segments = []
    
    for(var raw_map_segment in map)
    {
      var start_point = new point(raw_map_segment["start_x"], raw_map_segment["start_y"]);
      var end_point = new point(raw_map_segment["end_x"], raw_map_segment["end_y"]);

      segments.push(new segment(start_point, end_point));
    }
    
    return segments;
  }
}
