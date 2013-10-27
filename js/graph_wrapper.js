function GraphWrapper(graph_json) {

    this.graph_json = graph_json;

    this.get_node_for_id = function(id) {
        for (var i=0; i<this.graph_json.length; i++) {
            var node = this.graph_json[i];
            if (node.id == id ) {
                return new Point(node.x, node.y, 1);
            }
        }
        return null;
    }

    this.get_connected_node_ids = function (id_to_look_for) {
        for (var i=0; i<this.graph_json.length; i++) {
            var node = this.graph_json[i];
            if (node.id == id_to_look_for ) {
                return node.connected_nodes;
            }
        }
        return [];
    }



    this.get_all_nodes = function() {
      var node_parser = new NodeParser();
      return node_parser.parse(this.graph_json);
    }
}
