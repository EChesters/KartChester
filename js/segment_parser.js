function segment_parser() {
  this.parse = function(map) {
    var segments = []
    console.log(map);

    for(var index = 0; index < map.length; index++)
    {
      var start_point = new Point(map[index]["start_x"], map[index]["start_y"]);
      var end_point = new Point(map[index]["end_x"], map[index]["end_y"]);

      segments.push(new Segment(start_point, end_point));
    }

    return segments;
  }
}
