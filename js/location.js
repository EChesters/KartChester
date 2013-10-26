function Location(a_segment, segment_position) {
    this.current_segment = a_segment.get_a_copy();
    this.segment_position = segment_position;

    this.to_coordinates = function() {
        var my_x = this.segment_position*(this.current_segment.end_point.x - this.current_segment.start_point.x) + this.current_segment.start_point.x;
        var my_y = this.segment_position*(this.current_segment.end_point.y - this.current_segment.start_point.y) + this.current_segment.start_point.y;
        return new Point(my_x, my_y);
    }

    this.get_a_copy =  function () {
        var l = new Location(this.current_segment, this.segment_position);
        return l;
    }
}