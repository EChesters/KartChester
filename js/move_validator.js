function MoveValidator() {
  this.validate = function(target_node, next_node, graph_wrapper) {
    console.log("target node");
    console.log(next_node);

    connected_nodes = graph_wrapper.get_connected_node_ids(target_node.id);
    console.log(connected_nodes);
    target_node_position_in_connected_nodes = connected_nodes.indexOf(next_node.id);

    return target_node_position_in_connected_nodes !== -1;
  }
}
