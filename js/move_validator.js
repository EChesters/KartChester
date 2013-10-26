function MoveValidator() {
  this.validate = function(player_location, target_segment, graph_wrapper) {
    connected_segments = graph_wrapper.get_connected_edges_ids(player_location.current_segment.id);
    target_segment_position_in_connected_segments = connected_segments.indexOf(target_segment.id);

    return target_segment_position_in_connected_segments !== -1;
  }
}
