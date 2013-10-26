function MoveValidator() {
  this.validate = function(player_location, target_segment, graph_wrapper) {
    connected_segments = graph_wrapper.get_connected_edges_ids(player_location.segment.id);

    for (var index = 0; index < connected_segments.length; index++)
    {
      if (connected_segments[index] === target_segment.id)
      {
        return true;
      }
    }

    return false;
  }
}
