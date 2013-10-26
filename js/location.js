function Location(segment, segment_position) {
    this.segment = segment;
    this.segment_position = segment_position;

    this.to_coordinates = function() {
        return new point();
    }
}